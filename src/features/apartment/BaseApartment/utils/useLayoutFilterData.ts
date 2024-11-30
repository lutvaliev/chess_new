/* eslint-disable max-len */
import { UseFormReturn } from 'react-hook-form'
import { useMemo } from 'react'
import { TBaseForm, TLayouts, TObject } from '../types'

export function useLayoutFilterData(formReturn: UseFormReturn<TBaseForm>, data?: TLayouts[]) {
  const { cost, room, totalArea, floor, sorting } = formReturn.watch()

  return useMemo(() => {
    if (!data) {
      return []
    }

    const { min: areaMin, max: areaMax } = totalArea || {}
    const { min: costMin, max: costMax } = cost || {}
    const { min: floorMin, max: floorMax } = floor || {}

    const filteredData = data.filter((item) => {
      if (room && room.length > 0 && !room.includes('allRooms') && !room.includes(item.parameters.rooms)) {
        return false
      }

      if ((areaMin && item.parameters.area < areaMin) || (areaMax && item.parameters.area > areaMax)) {
        return false
      }

      if ((costMin && item.parameters.MinimalPrice < costMin) || (costMax && item.parameters.MinimalPrice > costMax)) {
        return false
      }

      // if ((floorMin && item.floor < floorMin) || (floorMax && item.floor > floorMax)) {
      //   return false
      // }

      return true
    })

    // Сортируем данные
    switch (sorting) {
    case 'priceAsc':
      return filteredData.sort((a, b) => a.parameters.MinimalPrice - b.parameters.MinimalPrice)
    case 'priceDesc':
      return filteredData.sort((a, b) => b.parameters.MinimalPrice - a.parameters.MinimalPrice)
    case 'areaAsc':
      return filteredData.sort((a, b) => a.parameters.MinimalPrice - b.parameters.MinimalPrice)
    case 'areaDesc':
      return filteredData.sort((a, b) => b.parameters.MinimalPrice - a.parameters.MinimalPrice)
    default:
      return filteredData
    }
  }, [room, cost, totalArea, floor, data, sorting])
}
