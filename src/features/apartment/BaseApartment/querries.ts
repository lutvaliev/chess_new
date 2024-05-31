import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../../core/api/apiClient'
import { TBuilding, TDistrict, TSection, TObject, TObjectParams, TLayouts, TApartments } from './types'

const QueryKeys = {
  District: 'District',
  Building: 'Building',
  Section: 'Section',
  Layouts: 'Layouts',
  Apartments: 'Apartments',
  ObjectChess: 'ObjectChess'
}

async function getDistrict(): Promise<TDistrict[]> {
  try {
    const response = await apiClient.get('https://gds.4dev.app/api/hs/restapi_v1/district')
    return response.data.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useDistrictQuery() {
  const keys = [QueryKeys.District]
  return useQuery<TDistrict[], Error>(keys, () => getDistrict())
}

async function getBuilding(buildingId: string): Promise<TBuilding[]> {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/building?filter_type=district&id=${buildingId}`)
    return response.data.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useBuildingQuery(buildingId?: string) {
  const keys = [QueryKeys.Building, buildingId]
  return useQuery<TBuilding[], Error>(keys, () => getBuilding(buildingId!), {
    enabled: !!buildingId
  })
}

async function getSection(sectionId: string, filter: string): Promise<TSection[]> {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/section?filter_type=${filter}&id=${sectionId}`)
    return response.data.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useSectionQuery(filter: string, sectionId?: string) {
  const keys = [QueryKeys.Section, sectionId]
  return useQuery<TSection[], Error>(keys, () => getSection(sectionId!, filter), {
    enabled: !!sectionId
  })
}

async function getObjectChess(
  id: string,
  filter: string,
  page?: number,
  pagesize?: number
): Promise<TObject[]> {
  try {
    const response = await apiClient('https://gds.4dev.app/api/hs/restapi_v1/estate_object?',
      {
        params: {
          id,
          filter_type: filter,
          status: true,
          additional_info: true,
          page: page || undefined,
          pagesize: pagesize || undefined
        }
      })
    return response.data?.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useObjectChessQuery = (
  { id, filter }: TObjectParams,
  page?: number,
  pagesize?: number
) => {
  const keys = [QueryKeys.ObjectChess, id, filter, page, pagesize]
  return useQuery(
    keys,
    () => getObjectChess(id, filter, page, pagesize),
    {
      enabled: !!id,
      keepPreviousData: true
    }
  )
}

async function getLayouts(id_building: string): Promise<TLayouts[]> {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/chess/layouts?id_building=${id_building}`)
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useLayoutsQuery(id_building?: string) {
  const keys = [QueryKeys.Layouts, id_building]
  return useQuery<TLayouts[], Error>(keys, () => getLayouts(id_building!), {
    enabled: !!id_building
  })
}

// eslint-disable-next-line max-len
async function getApartments(id_district: string, id_building: string, id_layouts: string): Promise<TApartments[]> {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/chess/apartment_by_layout?id_district=${id_district}&id_building=${id_building}&id_layouts=${id_layouts}`)
    console.log(response.data, 'response')
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}
// eslint-disable-next-line max-len
export function useApartmentsQuery(id_district?: string, id_building?: string, id_layouts?: string) {
  const keys = [QueryKeys.Apartments, id_district, id_building, id_layouts]
  console.log(keys, 'keys')
  // eslint-disable-next-line max-len
  return useQuery<TApartments[], Error>(keys, () => getApartments(id_district!, id_building!, id_layouts!), {
    enabled: !!id_layouts
  })
}
