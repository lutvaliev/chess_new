import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../core/api/apiClient'
import { TObject } from './types'

const QueryKeys = {
  District: 'District',
  Building: 'Building',
  Section: 'Section',
  ObjectChess: 'ObjectChess'
}

async function getDistrict() {
  try {
    const response = await apiClient.get('https://gds.4dev.app/api/hs/restapi_v1/district')
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useDistrictQuery() {
  const keys = [QueryKeys.District]
  return useQuery(keys, () => getDistrict())
}

async function getBuilding(buildingId: string) {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/building?filter_type=district&id=${buildingId}`)
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useBuildingQuery(buildingId: string) {
  const keys = [QueryKeys.Building, buildingId]
  return useQuery(keys, () => getBuilding(buildingId), {
    enabled: !!buildingId
  })
}

async function getSection(sectionId: string, filter: string) {
  try {
    const response = await apiClient.get(`https://gds.4dev.app/api/hs/restapi_v1/section?filter_type=${filter}&id=${sectionId}`)
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export function useSectionQuery(sectionId: string, filter: string) {
  const keys = [QueryKeys.Section, sectionId]
  return useQuery(keys, () => getSection(sectionId, filter), {
    enabled: !!sectionId
  })
}

async function getObjectChess(id: string, filter: string): Promise<TObject[]> {
  try {
    const response = await apiClient(`https://gds.4dev.app/api/hs/restapi_v1/estate_object?id=${id}&filter_type=${filter}&status=true`)
    return response.data?.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useObjectChessQuery = ({ id, filter }: any) => {
  const keys = [QueryKeys.ObjectChess, id, filter]
  return useQuery(
    keys,
    () => getObjectChess(id, filter),
    {
      enabled: !!id
    }
  )
}
