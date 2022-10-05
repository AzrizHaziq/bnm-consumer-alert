export const mapToArray = <TKey, TVal>(map: Map<TKey, TVal>): { k: TKey; v: TVal }[] => {
  const arr: { k: TKey; v: TVal }[] = []

  map.forEach((v, k) => arr.push({ k, v }))
  return arr
}

export const sortBy =
  <T>(key: string, by: 'asc' | 'desc') =>
  (arr: T[]) =>
    arr.sort((a: any, b: any) => {
      const { [key]: a1 } = a
      const { [key]: b1 } = b

      return (by === 'asc' ? a1 > b1 : a1 < b1) ? 1 : (by === 'asc' ? a1 < b1 : a1 > b1) ? -1 : 0
    })
