import { random } from './math'

const defaultCssColors = [
  'bg-danger',
  'bg-dark',
  'bg-info',
  'bg-primary',
  'bg-secondary',
  'bg-success',
  'bg-warning',
  'bg-dark',
]

export function randomBgCssColor(colors: string[] = defaultCssColors): string {
  return colors[random(0, colors.length)]
}
