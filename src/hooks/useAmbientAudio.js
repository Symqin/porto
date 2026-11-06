import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const CHORDS = [
  [261.63, 329.63, 392.0, 493.88],
  [220.0, 261.63, 329.63, 392.0],
  [174.61, 220.0, 261.63, 329.63],
  [196.0, 246.94, 293.66, 392.0],
];

const MELODY = [
  523.25,
  587.33,
  659.25,
  587.33,
  493.88,
  392.0,
  440.0,
  392.0,
  329.63,
  392.0,
  440.0,
  523.25,
  493.88,
  440.0,
  392.0,
  329.63,
];

const DEFAULT_VOLUME = 0.34;
const MASTER_VOLUME_SCALE = 0.22;

function createTone(
  audioContext,
  destination,
  frequency,
  duration,
  volume,
  waveform = 'sine',
) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const currentTime = audioContext.currentTime;

  oscillator.type = waveform;
  oscillator.frequency.setValueAtTime(frequency, currentTime);

  gain.gain.setValueAtTime(0.0001, currentTime);
  gain.gain.exponentialRampToValueAtTime(
    Math.max(volume, 0.0002),
    currentTime + 0.7,
  );
  gain.gain.setTargetAtTime(0.0001, currentTime + duration, 0.9);

  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start();
  oscillator.stop(currentTime + duration + 4);
}

function clearAudioIntervals(intervals) {
  intervals.forEach((intervalId) => {
    window.clearInterval(intervalId);
  });
}

function closeAudioEngine(engine) {
  if (!engine) return;

  clearAudioIntervals(engine.intervals);
  engine.context.close().catch(() => {});
}

function createAudioEngine(audioContext) {
  const master = audioContext.createGain();
  const lowpass = audioContext.createBiquadFilter();

  lowpass.type = 'lowpass';
  lowpass.frequency.value = 1750;
  master.gain.value = 0.0001;

  lowpass.connect(master);
  master.connect(audioContext.destination);

  return { master, lowpass };
}

export function useAmbientAudio() {
  const engineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [supported, setSupported] = useState(true);

  const stop = useCallback(() => {
    const engine = engineRef.current;

    if (!engine) {
      setIsPlaying(false);
      return;
    }

    engine.master.gain.setTargetAtTime(
      0.0001,
      engine.context.currentTime,
      0.15,
    );
    clearAudioIntervals(engine.intervals);

    window.setTimeout(() => {
      engine.context.close().catch(() => {});
    }, 450);

    engineRef.current = null;
    setIsPlaying(false);
  }, []);

  const play = useCallback(async () => {
    if (engineRef.current) return;

    const AudioContextConstructor =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextConstructor) {
      setSupported(false);
      return;
    }

    const audioContext = new AudioContextConstructor();
    const { master, lowpass } = createAudioEngine(audioContext);

    try {
      await audioContext.resume();
      master.gain.setTargetAtTime(
        volume * MASTER_VOLUME_SCALE,
        audioContext.currentTime,
        0.8,
      );

      let chordIndex = 0;
      let melodyIndex = 0;

      function playChord() {
        const chord = CHORDS[chordIndex % CHORDS.length];
        chordIndex += 1;

        chord.forEach((frequency, index) => {
          const isRootNote = index === 0;
          const adjustedFrequency = index === 3 ? frequency / 2 : frequency;
          const noteVolume = isRootNote ? 0.085 : 0.032;
          const waveform = isRootNote ? 'sine' : 'triangle';

          createTone(
            audioContext,
            lowpass,
            adjustedFrequency,
            5.5,
            noteVolume,
            waveform,
          );
        });
      }

      function playMelody() {
        const frequency = MELODY[melodyIndex % MELODY.length];
        melodyIndex += 1;

        createTone(
          audioContext,
          lowpass,
          frequency,
          2.8,
          0.035,
          'sine',
        );
      }

      playChord();
      playMelody();

      const intervals = [
        window.setInterval(playChord, 5700),
        window.setInterval(playMelody, 1850),
      ];

      engineRef.current = {
        context: audioContext,
        master,
        intervals,
      };
      setIsPlaying(true);
    } catch {
      await audioContext.close().catch(() => {});
      setSupported(false);
    }
  }, [volume]);

  const toggle = useCallback(() => {
    if (engineRef.current) {
      stop();
      return;
    }

    void play();
  }, [play, stop]);

  useEffect(() => {
    const engine = engineRef.current;

    if (!engine) return;

    engine.master.gain.setTargetAtTime(
      volume * MASTER_VOLUME_SCALE,
      engine.context.currentTime,
      0.12,
    );
  }, [volume]);

  useEffect(() => {
    return () => {
      closeAudioEngine(engineRef.current);
    };
  }, []);

  return {
    isPlaying,
    volume,
    setVolume,
    toggle,
    supported,
  };
}
