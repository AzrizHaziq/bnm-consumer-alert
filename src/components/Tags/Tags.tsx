import React, { useContext } from 'react'
import uuid from 'uuid/v1'
import {
  ConsumerAlertContext,
  IConsumerContext,
} from 'data/consumer-alert.context'
import {
  mostUsedWords,
  PLUCK_MOST_USED_KEYWORDS_BY,
} from 'data/consumer-alerts'

import './Tags.scss'

const Tags: React.FC = () => {
  const { consumerList } = useContext<IConsumerContext>(ConsumerAlertContext)

  const tags = mostUsedWords(consumerList)

  return (
    <>
      <h3 className="text-white-50">
        Top {PLUCK_MOST_USED_KEYWORDS_BY} most used keywords:
      </h3>
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

export default Tags
