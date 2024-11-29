import { UseFormReturn } from 'react-hook-form'
import { useMemo } from 'react'
import { TBaseForm, TObject } from '../types'

export function useFilteredData(formReturn: UseFormReturn<TBaseForm>, data?: TObject[]) {
  const { cost, room, totalArea, floor, sorting } = formReturn.watch()
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
      if (Array.isArray(room) && room.length === 0) {
        setValue('room', '')
        tempData = tempData.map((data: TObject) => {
          if (Array.isArray(room)) {
            return room.includes(data.rooms)
              ? { ...data, opacity: false }
              : { ...data, opacity: false }
          }
          return data
        })
      } // Add the closing parenthesis here
      tempData = tempData.map((data: TObject) => {
        if (Array.isArray(room)) {
          return room.includes(data.rooms)
            ? { ...data, opacity: false }
            : { ...data, opacity: true }
        }
        return data
      })
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
    if (floor.min || floor.max) {
      if (floor.min) {
        tempData = tempData
          .map((data: TObject) => (floor.min > data.floor ? { ...data, opacity: true } : data))
      }
      if (floor.max) {
        tempData = tempData
          .map((data: TObject) => (floor.max < data.floor ? { ...data, opacity: true } : data))
      }
    }
    console.log(sorting)

    if (sorting) {
      switch (sorting) {
      case 'priceAsc':
        tempData = [...tempData].sort((a, b) => Number(a.cost) - Number(b.cost))
        break
      case 'priceDesc':
        tempData = [...tempData].sort((a, b) => Number(b.cost) - Number(a.cost))
        break
      case 'areaAsc':
        tempData = [...tempData].sort((a, b) => Number(a.area) - Number(b.area))
        break
      case 'areaDesc':
        tempData = [...tempData].sort((a, b) => Number(b.area) - Number(a.area))
        break
      default:
        return tempData
      }
    }

    return tempData
  }, [room, cost.min, cost.max, totalArea.min, totalArea.max, floor.min, floor.max, data, sorting])
}
