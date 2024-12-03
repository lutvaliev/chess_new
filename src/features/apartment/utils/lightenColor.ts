const lightenColor = (hexColor: string, percentage: number): string => {
  try {
    const hex = hexColor.replace('#', '')

    if (hex.length !== 6) {
      throw new Error('Invalid HEX color format. Expected 6 characters.')
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    const lighten = (color: number) =>
      Math.min(255, Math.floor(color + (255 - color) * (percentage / 100)))

    const newR = lighten(r)
    const newG = lighten(g)
    const newB = lighten(b)

    const toHex = (color: number) => color.toString(16).padStart(2, '0')

    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`
  } catch {
    return '#fff'
  }
}

export default lightenColor
