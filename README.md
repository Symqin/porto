# Notes from the In-Between

A personal portfolio for Syahril Mutaqin, presented as a Game Developer and
Software Engineer with a quality-engineering mindset. The interface combines
real developer-workspace photography and one original cinematic illustration
created specifically for the game-development project.

The project is built with React, Vite, Tailwind CSS 4, and CSS Modules. The
source code follows a two-space indentation style and keeps page features,
shared components, data, hooks, and styles in separate modules.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Code quality

Check lint rules:

```bash
npm run lint
```

Format the source code:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

## Project structure

```text
src/
├── app/
│   ├── providers/
│   │   └── ThemeProvider.jsx
│   └── App.jsx
├── components/
│   ├── layout/
│   └── ui/
├── data/
│   └── portfolio.js
├── features/
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── home/
│   ├── projects/
│   └── skills/
├── hooks/
│   └── useAmbientAudio.js
├── styles/
│   ├── global.css
│   ├── reset.css
│   └── tokens.css
└── main.jsx

public/
└── images/
    └── game-dev-workspace.webp
```

### Architecture guidelines

- `app/` contains application composition and global providers.
- `components/` contains reusable interface elements and layout components.
- `features/` contains page sections grouped by product feature.
- `data/` contains portfolio content and theme definitions.
- `hooks/` contains reusable interaction and browser logic.
- `styles/` contains global styles, resets, and design tokens.

### Styling approach

- Tailwind CSS handles small utility needs and responsive visibility helpers.
- CSS Modules own component-specific layout, appearance, and interactions.
- CSS custom properties in `tokens.css` define shared design tokens and theme
  palettes.
- Component-specific styles should stay beside their component.
- Avoid introducing global selectors for local component styling.

### Updating portfolio content

Update `src/data/portfolio.js` to change the profile, project entries, skills,
experience, education, certifications, volunteering, and theme labels. Keep
presentation components independent from the content source.

### Ambient audio

The music player generates an original ambient loop with the Web Audio API.
Audio starts only after the visitor presses Play. No external music file or
autoplay permission is required.

### Accessibility and maintenance

- Semantic sections and accessible control labels
- Keyboard-visible focus states
- Reduced-motion support
- One original illustration is stored locally in `public/images/`
- Consistent two-space indentation
- Prettier scripts for repeatable formatting

## Before publishing

Review dates, GPA, project descriptions, external links, and any public profile
information in `src/data/portfolio.js`. An email address is intentionally
omitted because a verified public address was not available.

## Photography and visual assets

The visual direction is cinematic anime photography adapted to the portfolio's
focus on game development, software engineering, and quality engineering. Real
developer-workspace photographs carry the main narrative, while one original
cinematic illustration supports the game-development project. Project images
are editorial context, not screenshots of the actual applications.

The hero uses a real developer-workspace photograph by Olumuyiwa Sobowale:

- https://unsplash.com/photos/a-man-sitting-in-front-of-a-computer-wearing-headphones-kQIdjLbCghA

The About section uses a real coding-workspace photograph by Bayu Syaits:

- https://unsplash.com/photos/laptop-and-phone-on-a-desk-with-coding-software-open-oYzjGQ7LCVE

The game-development project uses an original local illustration at
`public/images/game-dev-workspace.webp`. It is clearly descriptive concept art,
not a screenshot of the actual game. Other project images are editorial
contextual photographs, not screenshots of the applications. Photography is
used under the Unsplash License; attribution is appreciated. Review image and
license details before publishing. For production, consider serving optimized
local WebP or AVIF copies rather than relying on third-party image requests.


## Retro game-dev visual direction

The current visual direction uses a retro pixel-world identity with a midnight palette, pixel-inspired display typography, and a custom pixel-art workspace scene. The project artwork in `public/images/projects/` is explicitly marked as concept preview artwork; it is not a capture of the shipped game, Growly app, source architecture, or Cypress report. Replace those concept previews with original screenshots before publishing.

Recommended screenshot filenames when supplied:

- `public/images/projects/rumah-hantu.png` — gameplay or Godot scene
- `public/images/projects/growly.png` — actual Growly app screen
- `public/images/projects/architecture.png` — real code / architecture diagram
- `public/images/projects/orangehrm-cypress.png` — actual Cypress test report

Keep screenshots cropped consistently (16:8.5 works well), use WebP where practical, and preserve enough resolution for desktop displays.
