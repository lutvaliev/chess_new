export function getPlanPrefix(count: number): string {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'ок'
  }

  switch (lastDigit) {
  case 1:
    return ''
  case 2:
  case 3:
  case 4:
    return 'ки'
  default:
    return 'ок'
  }
}
