import { type Sentiment } from '../../theme/semantic-tokens/types'
import { getSlotRecipePalettes } from './helpers'

export const SLOTS = ['root', 'image', 'label']

export const PALETTES = ['neutral', 'action'] satisfies Sentiment[]

export const avatarPalettes = getSlotRecipePalettes(SLOTS, PALETTES)
