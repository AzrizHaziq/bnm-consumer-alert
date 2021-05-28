import React from 'react'
import { v1 as uuid } from 'uuid'
import { IConsumerAlert, mostUsedWords, PLUCK_MOST_USED_KEYWORDS_BY } from 'data/consumer-alerts'

import './Tags.scss'

export const Tags: React.FC<ITagProps> = ({ consumerList }: { consumerList: IConsumerAlert[] }) => {
  const tags = mostUsedWords(consumerList)

  return (
    <>
      <h3 className="text-white-50">Top {PLUCK_MOST_USED_KEYWORDS_BY} most used keywords:</h3>
      <div className="tags">
        {tags.map(({ k: word, v }: { k: string; v: number }) => (
          <div className="tags__item" key={uuid()}>
            {word}: {v}
          </div>
        ))}
      </div>
    </>
  )
}

interface ITagProps {
  consumerList: IConsumerAlert[]
}
