import { UseFormReturn } from 'react-hook-form'
import { useMemo } from 'react'
import { TBaseForm, TObject } from '../types'

export function useFilteredData(formReturn: UseFormReturn<TBaseForm>, data?: TObject[]) {
  const { cost, room, totalArea } = formReturn.watch()
  const { setValue } = formReturn

  return useMemo(() => {
    if (!data) {
      return []
    }
    let tempData = [...data]
    if (room) {
      if (room === 'allRooms') {
        setValue('room', '')
        return tempData
      }
      tempData = tempData
        .map((data: TObject) => (data.rooms !== room ? { ...data, opacity: true } : data))
    }
    if (totalArea.min || totalArea.max) {
      if (totalArea.min) {
        tempData = tempData
          .map((data: TObject) => (totalArea.min > data.area ? { ...data, opacity: true } : data))
      }
      if (totalArea.max) {
        tempData = tempData
          .map((data: TObject) => (totalArea.max < data.area ? { ...data, opacity: true } : data))
      }
    }
    if (cost.min || cost.max) {
      if (cost.min) {
        tempData = tempData
          .map((data: TObject) => (cost.min > data.cost ? { ...data, opacity: true } : data))
      }
      if (cost.max) {
        tempData = tempData
          .map((data: TObject) => (cost.max < data.cost ? { ...data, opacity: true } : data))
      }
    }

    return tempData
  }, [room, cost.min, cost.max, totalArea.min, totalArea.max, data])
}
