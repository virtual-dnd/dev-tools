import { defineConfig, definePreset, defineSemanticTokens } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import {
  keyframes,
  tokens,
  textStyles,
  neutralTokens,
  actionTokens,
  infoTokens,
  successTokens,
  warningTokens,
  dangerTokens,
  brandTokens,
} from './theme/index'
import { recipes, slotRecipes } from './recipes/index'

export const nurlPreset = definePreset({
  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: {
      keyframes,
      recipes,
      slotRecipes,
      textStyles,
      tokens,
    },

    semanticTokens: defineSemanticTokens({
      colors: {
        ...neutralTokens,
        ...actionTokens,
        ...infoTokens,
        ...successTokens,
        ...warningTokens,
        ...dangerTokens,
        ...brandTokens,
      },
    }),
  },
})

export const ganglionConfig = defineConfig({
  preflight: true,
  prefix: 'nurl',

  jsxFramework: 'solid',
  jsxFactory: 'ganglion',

  outdir: 'styled-system',
})

export * from './theme/index'
export * from './recipes/index'
export * from './conditions'
export * from './patterns'
export * from './utilities'
export * from './types'

export default nurlPreset
