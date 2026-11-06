import styles from './SectionMarker.module.css';

export default function SectionMarker({ index, label, note }) {
  return (
    <div className={styles.marker}>
      <span className={styles.index}>{index}</span>
      <span className={styles.label}>{label}</span>
      {note ? <span className={styles.note}>{note}</span> : null}
    </div>
  );
}
