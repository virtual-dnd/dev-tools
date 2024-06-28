import { defineGlobalStyles } from '@pandacss/dev'

const tooltipStyles = {
  _positionTop: {
    _before: {
      top: '0',
      transform: 'translateY(-150%)',
    },
    _after: {
      borderColor:
        'var(--nurl-colors-neutral-surface-100) transparent transparent transparent',
      left: '50%',
      top: '0',
      transform: 'translateY(-120%)',
    },
  },
  _positionBottom: {
    _before: {
      bottom: '0',
      transform: 'translateY(150%)',
    },
    _after: {
      borderColor:
        'transparent transparent var(--nurl-colors-neutral-surface-100) transparent ',
      bottom: '0',
      left: '50%',
      transform: 'translateY(120%)',
    },
  },
  _positionLeft: {
    _before: {
      left: '0',
      top: '0',
      transform: 'translate3d(-110%, 45%, 0)',
    },
    _after: {
      borderColor:
        'transparent transparent transparent var(--nurl-colors-neutral-surface-100)',
      left: '0',
      top: '0',
      transform: 'translate3d(-45%, 176%, 0)',
    },
  },
  _positionRight: {
    _before: {
      right: '0',
      top: '0',
      transform: 'translate3d(110%, 45%, 0)',
    },
    _after: {
      borderColor:
        'transparent var(--nurl-colors-neutral-surface-100) transparent transparent ',
      right: '0',
      top: '0',
      transform: 'translate3d(95%, 176%, 0)',
    },
  },
  // bubble
  _before: {
    backgroundColor: 'var(--nurl-colors-neutral-surface-100)',
    color: 'var(--nurl-colors-neutral-text-initial)',
    content: 'attr(aria-label)',
    fontWeight: 400,
    maxH: '6rem',
    maxW: '17rem',
    pxi: '2',
    py: '3',
    opacity: 0,
    position: 'absolute',
    rounded: 'sm',
    shadow: 'lg',
    textAlign: 'left',
    textStyle: 'body-xs',
    textWrap: 'pretty',
    whiteSpace: 'nowrap',
    zIndex: 'tooltip',
    _motionSafe: {
      animationName: 'fadeIn',
      animationDuration: '150ms',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      animationDelay: '50ms',
    },
  },
  // arrow
  _after: {
    content: '""',
    position: 'absolute',
    marginInlineStart: '-5px',
    border: '5px solid',
    opacity: 0,
    shadow: 'lg',
    zIndex: 'tooltip',
    _motionSafe: {
      animationName: 'fadeIn',
      animationDuration: '150ms',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      animationDelay: '50ms',
    },
  },
}

export const globalCss = defineGlobalStyles({
  html: {
    backgroundColor: 'var(--nurl-colors-neutral-surface-100)',
    color: 'var(--nurl-colors-neutral-text-300)',
    fontFamily: 'var(--nurl-fonts-sans)',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontVariationSettings: "'wght' 500",
    lineHeight: '150%',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',

    _modalOpen: {
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      overflow: 'hidden',
      overscrollBehavior: 'contain',
      paddingInlineStart: '0',
      paddingInlineEnd: '0.5em',
      paddingTop: '0',
      position: 'relative',
    },

    _scrollbar: {
      width: '0.5em',
    },
    _scrollbarTrack: {
      backgroundColor: 'var(--nurl-colors-neutral-surface-200)',
      outline: 'none',
    },
    _scrollbarThumb: {
      backgroundColor: 'var(--nurl-colors-neutral-border-initial)',
      borderRadius: '5px',
      outline: 'none',
    },
  },

  strong: {
    fontVariationSettings: "'wght' 700",
  },

  kbd: {
    boxShadow: 'none',
  },

  ':is(mark::before, mark::after)': {
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(100%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },

  'mark::before': {
    content: ' [highlight start] ',
  },

  'mark::after': {
    content: ' [highlight end] ',
  },

  // images

  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
  },
  ':is(img[width], img[height])': {
    maxWidth: 'none',
  },

  // tooltip

  ':is(div,button,span,svg)': {
    _tooltip: {
      position: 'relative',
      _hover: tooltipStyles,
      _focus: tooltipStyles,
    },
  },
})
