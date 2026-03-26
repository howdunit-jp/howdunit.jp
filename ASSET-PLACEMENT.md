# Asset placement guide

## 1) Logo files you need to prepare
Put these files here:

- `public/logo-wordmark.svg`
- `public/logo-wordmark-black.svg`
- `public/logo-wordmark-white.svg`

Current scaffold uses a text logo in the header.
When you want CodeX to swap in the real logo, tell it to replace the text in `src/components/Header.astro` with the SVG asset above.

## 2) Favicon / icon files you need to prepare
Put these files here:

- `public/favicon.svg`
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/og-default.jpg`

## 3) Project images you need to prepare
For peco-poco, put images here:

- `public/projects/peco-poco/cover.jpg`
- `public/projects/peco-poco/01.jpg`
- `public/projects/peco-poco/02.jpg`
- `public/projects/peco-poco/03.jpg`
- `public/projects/peco-poco/04.jpg`
- `public/projects/peco-poco/05.jpg`

For future projects, create the same pattern:

- `public/projects/<project-slug>/cover.jpg`
- `public/projects/<project-slug>/01.jpg`
- `public/projects/<project-slug>/02.jpg`
- ...

## 4) Text files you should still revise
- `src/pages/about.astro`
- `src/content/projects/peco-poco.md`

## 5) Recommended workflow in VS Code + CodeX
1. Unzip this folder.
2. Open the unzipped folder in Visual Studio Code.
3. Put your assets into the `public/` locations listed above.
4. Run `npm install`.
5. Run `npm run dev`.
6. Ask CodeX to replace the text logo with your SVG logo and finish the Astro implementation.
