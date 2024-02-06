import type { Sentiment } from '../../theme/semantic-tokens/types'
import { getSlotRecipePalettes } from './helpers'

export const SLOTS = [
  'root',
  'container',
  'featureIcon',
  'heading',
  'main',
  'closeRoot',
  'undoBtn',
]
export const PALETTES = [
  'info',
  'success',
  'warning',
  'danger',
] satisfies Sentiment[]

export const toastPalettes = getSlotRecipePalettes(SLOTS, PALETTES)
