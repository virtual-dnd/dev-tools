export const fonts = {
  display: {
    description: {
      value: 'Primary font reserved for display headings',
    },
    value: 'var(--font-nurl)',
  },
  sans: {
    description: {
      value: 'Primary font used for body and headings',
    },
    value: 'var(--font-nurl)',
  },
  mono: {
    description: {
      value: 'Code font used for any code related scenarios',
    },
    value: 'var(--font-nurl-mono)',
  },
  monoStrong: {
    description: {
      value: 'Code font used for any code related scenarios',
    },
    value: 'var(--font-nurl-mono-strong)',
  },
}

export const zIndex = {
  hide: {
    description: {
      value: 'Used for when you need to hide elements in the layer stack',
    },
    value: -1,
  },
  base: {
    description: {
      value: 'Initial layer value',
    },
    value: 0,
  },

  // pseudo-elements, borders, etc.
  decorator: {
    description: {
      value:
        'Used for positioning pseudo-elements, borders, and other similar elements in the layer stack',
    },
    value: 50,
  },

  // elements
  dropdown: {
    description: {
      value:
        'Used for positioning any dropdown like elements in the layer stack',
    },
    value: 1000,
  },
  sticky: {
    description: {
      value:
        'Used for positioning elements that need to stick to their nearest scrolling ancestor in the layer stack',
    },
    value: 1200,
  },
  banner: {
    description: {
      value:
        'Used for positioning any elements that are used like a admonition in the layer stack',
    },
    value: 1300,
  },
  overlay: {
    description: {
      value: 'Used for positioning overlay elements in the layer stack',
    },
    value: 1400,
  },
  modal: {
    description: {
      value: 'Used for positioning modal elements in the layer stack',
    },
    value: 1500,
  },
  popover: {
    description: {
      value: 'Used for positioning popover elements in the layer stack',
    },
    value: 1600,
  },
  toast: {
    description: {
      value: 'Used for positioning toast elements in the layer stack',
    },
    value: 1700,
  },
  tooltip: {
    description: {
      value: 'Used for positioning tooltip elements in the layer stack',
    },
    value: 1800,
  },
}

export const tokens = {
  fonts,
  zIndex,
}
