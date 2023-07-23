import { TObject } from '../types'

const createEmptyArray = (rows: number, columns: number) => Array.from({ length: rows + 1 }, () => Array(columns + 1).fill(''))

export const splitArrIntoChunks = (
  rows: number,
  columns: number,
  data?: TObject[]
): TObject[][] => {
  const emptyArray = createEmptyArray(rows, columns)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < emptyArray.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < emptyArray[i].length; j++) {
      const element = data?.find((item: any) => item?.floor === i && item?.floor_number === j)
      emptyArray[i][j] = element || ''
    }
  }
  const resultArray = emptyArray.filter((item) => item.filter(Boolean).length !== 0)

  return resultArray
}
