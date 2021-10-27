export function leadingZero(value: number): string {
  let string = String(value)
  if (string.length < 2) {
    string = '0' + +string
  }
  return string
}
