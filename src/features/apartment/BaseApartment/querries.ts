import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../../core/api/apiClient'
import { TBuilding, TDistrict, TSection, TObject, TObjectParams } from './types'

const QueryKeys = {
  District: 'District',
  Building: 'Building',
  Section: 'Section',
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
    console.log(response.data.data, 'response data')
    console.log(response, 'response')
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
