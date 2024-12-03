import lightenColor from './lightenColor'

const getStatusColor = (color: string): string => lightenColor(color, 40)

export default getStatusColor
