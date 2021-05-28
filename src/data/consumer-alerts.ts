import { pipe, mapToArray, sortBy } from 'helpers'

export const PLUCK_MOST_USED_KEYWORDS_BY = 30

export interface IConsumerAlert {
  id: string
  name: string
  registration_number: string
  added_date: Date
  websites: string[]
  bg_color: string
}

export const keywords = (arr: IConsumerAlert[]): Map<string, number> =>
  arr.reduce((acc, item) => {
    const { name } = item

    const spliced = name.split(' ')

    spliced.forEach(str => {
      // if valid number then drop it
      if (!isNaN(+str)) {
        return
      }

      const smallCase = str.toLowerCase()

      if (!acc.get(smallCase)) {
        acc.set(smallCase, 0)
      }

      acc.set(smallCase, (acc.get(smallCase) || 0) + 1)
    })

    return acc
  }, new Map())

export const mostUsedWords = pipe<any>(keywords, mapToArray, sortBy('v', 'desc'), (list: IConsumerAlert[]) =>
  list.slice(0, PLUCK_MOST_USED_KEYWORDS_BY)
)

export const orderBy = (key: string, by: 'asc' | 'desc') => pipe(sortBy(key, by), (list: IConsumerAlert[]) => [...list])
