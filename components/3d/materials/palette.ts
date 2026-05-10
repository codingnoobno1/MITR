export const palette = {
  background: "#eef2f7",
  substrate: "#dfe6ee",
  graphite: "#2b3440",
  cobalt: "#315b9c",
  slate: "#64748b",
  silver: "#cbd5e1",
  danger: "#ef4444",
  success: "#22c55e",
  warning: "#f59e0b",
  fog: "#dfe6ee"
};

export const materials = {
  board: {
    color: palette.substrate,
    roughness: 0.92,
    metalness: 0.12
  },
  chip: {
    color: palette.graphite,
    roughness: 0.55,
    metalness: 0.35
  },
  trace: {
    passive: {
      color: palette.slate,
      opacity: 0.07,
      transparent: true
    },
    active: {
      color: palette.cobalt,
      opacity: 0.22,
      transparent: true
    }
  },
  infrastructure: {
    tower: {
      color: "#475569",
      roughness: 0.3,
      metalness: 0.8
    },
    glass: {
      color: "#f8fafc",
      opacity: 0.1,
      transparent: true,
      roughness: 0
    }
  }
};
