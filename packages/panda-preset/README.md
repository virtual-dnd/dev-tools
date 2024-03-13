# Panda Preset

A preset and config for Panda-CSS projects from the Nurl Ganglion Design System.

## Installation

1. Follow the instructions in the [PandaCSS Website](https://panda-css.com/docs/installation/postcss)
2. [Install the preset](#install-the-preset)
3. [Update your config](#update-your-config)

## Install the Preset

```bash
pnpm install @nurl/panda-preset @pandacss/preset-panda
```

## Update your config

```typescript
import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import nurlPreset, { nurlConfig } from '@nurl/panda-preset'

export default defineConfig({
  ...nurlConfig,
  presets: [pandaPreset, nurlPreset],

  // Add your project specific config here
  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
})
```

## Usage

### Conditions

```typescript
export const conditions = {
  // themes
  nurlTheme: '[data-theme=nurl] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',

  // states
  modalOpen: '&:is([data-modal-open=true])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
  invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
  userInvalid: '&:is(:user-invalid, [aria-invalid])',
  groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
  groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',

  // elements
  startIcon: '&:is([data-start-icon=true])',

  // roles
  admin: '&:is([data-role=admin])',
  player: '&:is([data-role=player])',
  user: '&:is([data-role=user])',
  nuro: '&:is([data-role=nuro])',
}
```

### Patterns

We use a set of patterns to theme our components. Here are the patterns we use:
[View Patterns](https://github.com/nurl-inc/dev-tools/blob/main/packages/panda-preset/src/patterns.ts)

### Utilities

We use a set of utilities to theme our components. Here are the utilities we use:
[View Utilities](https://github.com/nurl-inc/dev-tools/blob/main/packages/panda-preset/src/utilities.ts)

### Semantic Tokens

We use a set of semantic tokens to theme our components. Here are the tokens we use:
[View Semantic Tokens](https://github.com/nurl-inc/dev-tools/tree/main/packages/panda-preset/src/theme/semantic-tokens)

### TextStyles

We use a set of text styles to theme our components. Here are the text styles we use:
[View TextStyles](https://github.com/nurl-inc/dev-tools/blob/main/packages/panda-preset/src/theme/textStyles.ts)

### Fonts & Z-Indices

We use a set of fonts and z-indices to theme our components. Here are the fonts and z-indices we use:
[View Fonts & Z-Indices](https://github.com/nurl-inc/dev-tools/blob/main/packages/panda-preset/src/theme/tokens.ts)

### Keyframes

We use a set of keyframes to animate our components. Here are the keyframes we use:
[View Keyframes](https://github.com/nurl-inc/dev-tools/blob/main/packages/panda-preset/src/theme/keyframes.ts)
