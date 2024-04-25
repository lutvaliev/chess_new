import { TObject } from '../types'

const createEmptyArray = (rows: number, columns: number) => Array
  .from({ length: rows + 1 }, () => Array(columns + 1)
    .fill(''))

export const splitData = (data: TObject[]) => {
  const maxFloor = () => Math.max(...data.map((elem: TObject) => elem.floor))
  const numberOfFloors = maxFloor()
  const maxFlat = () => Math.max(...data.map((elem: TObject) => elem.floor_number))
  const maxFlatValue = maxFlat()
  // eslint-disable-next-line no-underscore-dangle
  const section = data.find((elem: TObject) => elem.section_)?.section_

  const emptyArray = createEmptyArray(numberOfFloors, maxFlatValue)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < emptyArray.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < emptyArray[i].length; j++) {
      const element = data?.find((item) => item.floor === i && item.floor_number === j)
      emptyArray[i][j] = element || ''
    }
  }
  const resultArray = emptyArray.filter((item) => item.filter(Boolean).length).reverse()

  return {
    resultArray,
    floors: numberOfFloors,
    flats: maxFlatValue,
    section
  }
}
