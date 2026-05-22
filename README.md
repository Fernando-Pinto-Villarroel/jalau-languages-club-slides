# Languages Club — Room Slides

#### Made originally by Fernando Pinto Villarroel - Created to contribute among Hosts/Cohosts of the Languages Club at Jala University

Presentation slides for each language room session. Every room is an independent Vite + React project that imports its deck engine, components, and base styles from the `shared/` library — so each room only needs to provide its own theme and slides.

## Table of Contents

- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Running a Room](#running-a-room)
- [Creating a New Language Room](#creating-a-new-language-room)
- [Shared Library Reference](#shared-library-reference)

---

## Project Structure

```
room-slides/
  shared/               ← shared deck engine, components, and base styles
  french/
    session-1/          ← standalone Vite project
  english/
    session-1/          ← standalone Vite project
  spanish/              ← add session-1/ when ready
  portuguese/           ← add session-1/ when ready
```

Each `session-N/` folder is a self-contained app with its own `package.json` and `node_modules`. The `shared/` folder has no build step — rooms import from it directly via a Vite path alias (`@shared`).

---

## How It Works

```
room-slides/shared/src/
  App.jsx               ← app shell (routing, URL sync, audio element)
  deck/                 ← slide canvas, keyboard nav, navigation overlay
  audio/                ← timer + music player pill
  components/           ← DecoCircle, PromptCard (reusable across rooms)
  styles/base.css       ← all utility CSS classes driven by CSS variables
```

Each room provides two things:

1. **`src/styles/theme.css`** — imports `base.css` and defines the language's colors (`--primary`, `--accent`, gradients, borders, text ink) plus any language-specific background classes.
2. **`src/slides/`** — one file per slide, registered in `registry.js`. Slides import shared components via `@shared/`.

The `vite.config.js` in each room maps `@shared` to `../../shared/src`, so imports like `import DecoCircle from '@shared/components/DecoCircle'` resolve automatically.

---

## Running a Room

```bash
cd room-slides/french/session-1      # or english/session-1, etc.
npm install
npm run dev                          # opens the slide deck in the browser
```

To build for deployment:

```bash
npm run build            # outputs to dist/
npm run preview          # preview the production build locally
```

> **Audio files** — copy or replace `lang-club-music.mp3` and `timer-finished.wav` into the room's `public/` folder. The app works without them (audio silently fails).

---

## Creating a New Language Room

### 1. Copy an existing room

```bash
cp -r room-slides/english/session-1 room-slides/spanish/session-1
```

### 2. Update `package.json`

Change the `name` field:

```json
{ "name": "spanish-room-session-1" }
```

### 3. Update `index.html`

Set the page `<title>` and `lang` attribute:

```html
<html lang="es">
  <title>Spanish Room — Session 1</title>
</html>
```

### 4. Define your theme

Edit `src/styles/theme.css`. It imports the shared base and then you set the language's colors:

```css
@import "@shared/styles/base.css";

:root {
  --primary: #c60b1e; /* your main brand color */
  --primary2: #e63946;
  --accent: #f4c430;
  --accent2: #d4a017;

  --grad-accent: linear-gradient(130deg, var(--primary), var(--accent));
  --grad-flag: linear-gradient(90deg, #c60b1e 0%, #ffc400 50%, #c60b1e 100%);

  --ink: #2d0a0f;
  --ink-dim: rgba(45, 10, 15, 0.72);
  --border: rgba(198, 11, 30, 0.14);

  /* ... other variables */
}

/* Language-specific background classes */
.bg-spanish-section {
  background: linear-gradient(140deg, #8b0000 0%, #c60b1e 45%, #e63946 100%);
  color: #ffffff;
}
```

### 5. Write your slides

Each slide is a React component in `src/slides/`. Add it to `registry.js`:

```js
// src/slides/registry.js
import Slide00Intro from "./Slide00Intro";
import Slide01Icebreaker from "./Slide01Icebreaker";

export const slides = [Slide00Intro, Slide01Icebreaker];
```

A minimal slide:

```jsx
// src/slides/Slide00Intro.jsx
import DecoCircle from "@shared/components/DecoCircle";

export default function Slide00Intro() {
  return (
    <div className="bg-spanish-section section-slide">
      <DecoCircle
        size="1100px"
        color="rgba(255,255,255,0.10)"
        top="-350px"
        right="-250px"
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="label-white">Languages Club · Student Community</div>
        <div
          style={{
            fontSize: "var(--ts-title)",
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Spanish Session
        </div>
      </div>
      <div className="section-number">ES</div>
    </div>
  );
}
```

### 6. Install and run

```bash
cd room-slides/spanish/session-1
npm install
npm run dev
```

> **Port** — set a unique `server.port` in `vite.config.js` so rooms don't conflict when running side by side (French uses `5175`, English uses `5176`, etc.).

---

## Shared Library Reference

### CSS utility classes (from `base.css`)

All classes rely on CSS variables defined in `theme.css` — change the variables, the classes adapt automatically.

| Class                                           | Description                                           |
| ----------------------------------------------- | ----------------------------------------------------- |
| `section-slide`                                 | Centers content vertically (for intro/section slides) |
| `top-stripe`                                    | Adds a 7px flag-gradient stripe at the top            |
| `label`                                         | Uppercase gradient label text                         |
| `label-white`                                   | Uppercase white label text                            |
| `title` / `title-white`                         | Large hero heading                                    |
| `h2`                                            | Section heading                                       |
| `body`                                          | Body paragraph text                                   |
| `divider` / `divider-white` / `divider-flag`    | Horizontal accent rule                                |
| `pill` / `pill-accent` / `pill-white`           | Inline badge/tag                                      |
| `card` / `card-primary` / `card-accent`         | Bordered content card                                 |
| `two-col` / `three-col` / `four-col`            | Responsive grid layouts                               |
| `bullet-list` / `bullet-item` / `bullet-item-w` | Styled bullet lists                                   |
| `section-number` / `section-number-light`       | Large watermark number                                |

### CSS variables to define in `theme.css`

| Variable                              | Purpose                                          |
| ------------------------------------- | ------------------------------------------------ |
| `--primary` / `--primary2`            | Main brand color and lighter variant             |
| `--accent` / `--accent2`              | Secondary accent color                           |
| `--grad-accent`                       | Gradient used by labels, dividers, bullets       |
| `--grad-flag`                         | Gradient used by `top-stripe` and `divider-flag` |
| `--ink` / `--ink-dim` / `--ink-faint` | Text colors                                      |
| `--border` / `--border-h`             | Border colors                                    |
| `--bg` / `--bg-card`                  | Background colors                                |

### Shared components

| Import                          | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| `@shared/App`                   | App shell — pass `slides` array and optional `musicSrc` |
| `@shared/components/DecoCircle` | Decorative radial gradient blob                         |
| `@shared/components/PromptCard` | Numbered card with icon and label (icebreaker grids)    |
| `@shared/deck/DeckStage`        | Slide canvas with scaling and nav overlay               |
| `@shared/audio/MusicPlayer`     | Timer + music player pill                               |

### Keyboard shortcuts (built-in)

| Key                 | Action             |
| ------------------- | ------------------ |
| `→` / `Space`       | Next slide         |
| `←` / `Shift+Space` | Previous slide     |
| `R`                 | Reset to slide 1   |
| `1`–`9`             | Jump to slide N    |
| `Home` / `End`      | First / last slide |
