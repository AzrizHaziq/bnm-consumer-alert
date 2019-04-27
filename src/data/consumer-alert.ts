import uuid from 'uuid/v1'
import { data } from 'data/consumer-alert.json'

export const consumerAlert: ConsumerAlert[] = data.map(
  ({ regisration_number, ...item }) => ({
    ...item,
    id: uuid(),
    registration_number: regisration_number,
  }),
)

export interface ConsumerAlert {
  id: string
  name: string
  registration_number: string
  added_date: string
  websites: string[]
}
