import { UseFormReturn } from 'react-hook-form'
import { useMemo } from 'react'
import { TBaseForm, TObject } from '../types'

export function useFilteredData(formReturn: UseFormReturn<TBaseForm>, data?: TObject[]) {
  const { cost, room, totalArea, floor, sorting } = formReturn.watch()

  return useMemo(() => {
    if (!data) {
      return []
    }

    const { min: areaMin, max: areaMax } = totalArea || {}
    const { min: costMin, max: costMax } = cost || {}
    const { min: floorMin, max: floorMax } = floor || {}

    const filteredData = data.map((item) => {
      let opacity = false

      if (room && room.length > 0 && !room.includes('allRooms') && !room.includes(item.rooms)) {
        opacity = true
      }

      if ((areaMin && item.area < areaMin) || (areaMax && item.area > areaMax)) {
        opacity = true
      }

      if ((costMin && item.cost < costMin) || (costMax && item.cost > costMax)) {
        opacity = true
      }

      if ((floorMin && item.floor < floorMin) || (floorMax && item.floor > floorMax)) {
        opacity = true
      }

      return { ...item, opacity }
    })

    switch (sorting) {
    case 'priceAsc':
      return filteredData.sort((a, b) => a.cost - b.cost)
    case 'priceDesc':
      return filteredData.sort((a, b) => b.cost - a.cost)
    case 'areaAsc':
      return filteredData.sort((a, b) => a.area - b.area)
    case 'areaDesc':
      return filteredData.sort((a, b) => b.area - a.area)
    default:
      return filteredData
    }
  }, [room, cost, totalArea, floor, data, sorting])
}
