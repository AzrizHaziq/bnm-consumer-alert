export const mapToArray = (map: Map<any, any>): any[] => {
  const arr: any[] = []

  map.forEach((v, k) => arr.push({ k, v }))
  return arr
}

export const sortBy = (key: string, by: 'asc' | 'desc') => (arr: any[]) =>
  arr.sort((a: any, b: any) => {
    const { [key]: a1 } = a
    const { [key]: b1 } = b

    return (by === 'asc'
    ? a1 > b1
    : a1 < b1)
      ? 1
      : (by === 'asc'
        ? a1 < b1
        : a1 > b1)
      ? -1
      : 0
  })
