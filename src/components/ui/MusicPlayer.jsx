import { Pause, Play, Volume2, VolumeX, Waves } from 'lucide-react';
import { useAmbientAudio } from '../../hooks/useAmbientAudio.js';
import styles from './MusicPlayer.module.css';

const EQUALIZER_BARS = [0, 1, 2, 3, 4];

export default function MusicPlayer() {
  const {
    isPlaying,
    volume,
    setVolume,
    toggle,
    supported,
  } = useAmbientAudio();

  const isMuted = volume === 0;

  function toggleMute() {
    setVolume(isMuted ? 0.34 : 0);
  }

  function handleVolumeChange(event) {
    setVolume(Number(event.target.value));
  }

  return (
    <aside
      className={styles.player}
      aria-label="Ambient music player"
    >
      <div className={styles.identity}>
        <span className={styles.artwork}>
          <Waves size={17} strokeWidth={1.5} />
        </span>

        <span className={styles.trackCopy}>
          <strong>Between the rain</strong>
          <small>an original ambient loop</small>
        </span>
      </div>

      <div
        className={`${styles.equalizer} ${isPlaying ? styles.active : ''}`}
        aria-hidden="true"
      >
        {EQUALIZER_BARS.map((bar) => (
          <i key={bar} />
        ))}
      </div>

      <button
        className={styles.playButton}
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
        disabled={!supported}
      >
        {isPlaying ? (
          <Pause size={15} fill="currentColor" />
        ) : (
          <Play size={15} fill="currentColor" />
        )}
      </button>

      <div className={styles.volumeControl}>
        <button
          type="button"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          onClick={toggleMute}
          disabled={!supported}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        <input
          aria-label="Music volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          disabled={!supported}
        />
      </div>

      {!supported ? (
        <span className={styles.unsupported}>Audio unavailable</span>
      ) : null}
    </aside>
  );
}
