# React + TypeScript + Vite

## Contact requests

The contact form submits to Netlify Forms. Enable form detection for the Netlify
site, then redeploy so Netlify can register the static `contact` form in
`index.html`. Requests appear in the site's Forms dashboard; configure submission
notifications there if email delivery is needed.

Vite's local server and other static hosts do not process form submissions. The
form displays an error on a failed request and keeps the entered details so the
visitor can retry or call the school. A successful request means Netlify accepted
the submission, not that an email notification was delivered.

## Accessibility

The app includes a skip link, visible keyboard focus, route-specific page titles
and focus management, semantic headings and landmarks, labeled form errors,
category-filter state announcements, reduced-motion support, and a direct
calendar link with a phone-booking alternative. The cookie notice stays in the
document flow so it does not cover content or focused controls.

When changing pages, review keyboard navigation and layouts at narrow widths and
200% zoom. The embedded Google Calendar and external course websites are
third-party interfaces and need separate accessibility review.

## CHECK THE DEV SITE OUT AT...
[(https://elaborate-quokka-06a78b.netlify.app/)]
(https://elaborate-quokka-06a78b.netlify.app/)
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7dba07d-01be-463f-919a-aee2535d6858/deploy-status)](https://app.netlify.com/projects/estop-react-refresh-2026/deploys)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev and build performances. To add to it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x), and 
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

