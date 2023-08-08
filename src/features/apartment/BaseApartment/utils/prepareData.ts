import { TObject } from '../types'
import { splitData } from '../index'

export function prepareData(data: TObject[]) {
  const sortedBySection = data.reduce((acc: any, cur: TObject) => {
    // eslint-disable-next-line no-underscore-dangle
    acc[cur.section_] = [...acc[cur.section_] || [], cur]
    return acc
  }, {})

  return Object
    .values(sortedBySection || {})
    .map((section: any) => splitData(section || []))
}
