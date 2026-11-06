import styles from './ProjectArtwork.module.css';

const PROJECT_ARTWORK = {
  'situs-tertinggal': {
    src: '/images/projects/rumah-hantu-concept.webp',
    alt: 'Pixel-art concept preview of an Indonesian haunted-house tower-defense game.',
    kind: 'GAME SCENE / CONCEPT PREVIEW',
  },
  catbit: {
    src: '/images/game-dev-workspace.webp',
    alt: 'Concept artwork of a game developer workspace, used as a placeholder for the CatBit game jam project.',
    kind: 'GAME JAM / VISUAL PLACEHOLDER',
  },
  yorozuya: {
    src: '/images/projects/architecture-concept.webp',
    alt: 'Temporary technical concept image; replace with an actual Yorozuya e-commerce application screenshot.',
    kind: 'APP / SCREENSHOT PENDING',
  },
  growly: {
    src: '/images/projects/growly-concept.webp',
    alt: 'Illustrative mobile habit-tracker interface preview; replace with an actual Growly screenshot.',
    kind: 'MOBILE APP / CONCEPT PREVIEW',
  },
  orangehrm: {
    src: '/images/projects/orangehrm-concept.webp',
    alt: 'Illustrative Cypress end-to-end testing dashboard preview; replace with an actual test report screenshot.',
    kind: 'QA / CONCEPT PREVIEW',
  },
};

export default function ProjectArtwork({ project }) {
  const artwork = PROJECT_ARTWORK[project.id];

  if (!artwork) {
    return null;
  }

  return (
    <figure className={styles.artwork}>
      <div className={styles.imageFrame}>
        <img
          className={styles.image}
          src={artwork.src}
          alt={artwork.alt}
          loading="lazy"
        />
        <span className={styles.imageIndex}>{project.number.padStart(2, '0')}</span>
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.pixelDot} />
        {artwork.kind}
      </figcaption>
    </figure>
  );
}
