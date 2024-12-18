import constate from 'constate'
import { useEffect, useMemo, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import {
  defaultFormValues,
  TBaseForm,
  useBuildingQuery,
  useDistrictQuery,
  useSectionQuery,
  useLayoutsQuery
} from '../../BaseApartment'
import { useApartmentsQuery, useObjectChessQuery } from '../../BaseApartment/querries'
import { useFilteredData } from '../../BaseApartment/utils/useFilterData'
import { prepareData } from '../../BaseApartment/utils/prepareData'
import { TObject, TObjectParams } from '../../BaseApartment/types'
import { useLayoutFilterData } from '../../BaseApartment/utils/useLayoutFilterData'

const useFormInit = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const district = queryParams.get('districtId') || ''
  const building = queryParams.get('buildingId') || ''
  const section = queryParams.get('sectionId') || ''
  const view = queryParams.get('view') || 'TILE'
  const apiUrl = queryParams.get('apiUrl') || 'https://gds.4dev.app/api'

  return useForm<TBaseForm>({
    defaultValues: {
      ...defaultFormValues,
      view,
      district,
      building,
      section,
      apiUrl,
      initDistrict: !!district,
      initBuilding: !!building,
      initSection: !!section
    }
  })
}

function useResetForm({ setValue }: UseFormReturn<TBaseForm>) {
  const formReturn = useFormInit()
  const { data: districtData } = useDistrictQuery()

  const [currentDistrictIndex, setCurrentDistrictIndex] = useState(0)

  const { data: buildingData } = useBuildingQuery(districtData?.[currentDistrictIndex]?.id)
  const { data: sectionData } = useSectionQuery('building', buildingData?.[0]?.id)
  const { data: layoutsData } = useLayoutsQuery(buildingData?.[0]?.id, sectionData?.[0]?.id)
  const { data: apartmentsData } = useApartmentsQuery(
    districtData?.[currentDistrictIndex]?.id,
    buildingData?.[0]?.id,
    layoutsData?.[0]?.value
  )
  console.log('test')
  useEffect(() => {
    if (!districtData || !districtData.length) {
      return
    }

    if (buildingData?.length === 0 && currentDistrictIndex < districtData.length - 1) {
      setCurrentDistrictIndex((prevIndex) => prevIndex + 1)
      return
    }

    if (buildingData && sectionData) {
      if (formReturn.getValues('initDistrict')) {
        formReturn.setValue('initDistrict', false)
        return
      }

      setValue('district', districtData[currentDistrictIndex].id)
      setValue('building', buildingData[0].id)
      setValue('section', 'ALL_SECTIONS')

      if (layoutsData && apartmentsData) {
        setValue('layouts', layoutsData[0].value)
        setValue('apartments', apartmentsData[0])
      }
    }
  }, [
    districtData,
    buildingData,
    sectionData,
    layoutsData,
    apartmentsData,
    currentDistrictIndex
  ])
}

function useApartmentFilter(data?: TObject[]) {
  return useMemo(() => {
    if (!data) return undefined

    return data.reduce(
      (acc, currentValue) => {
        Object.entries(currentValue).forEach(([key, value]) => {
          if (key in acc) {
            acc[key].push(value)
          }
        })
        return {
          ...acc,
          rooms: acc.rooms
            .filter((room: any, index: any, self: any) => self.indexOf(room) === index)
            .sort()
          // rooms: [acc.rooms]
        }
      },
      {
        rooms: [],
        area: [],
        cost: []
      } as any
    )
  }, [data])
}

function usePrepareData(data?: TObject[]) {
  return useMemo(() => (data?.length ? prepareData(data) : []), [data])
}

function useObjectParams(formReturn: UseFormReturn<TBaseForm>): TObjectParams {
  const { building, section, view } = formReturn.watch()
  const isShowAllSections = section === 'ALL_SECTIONS' && view === 'TILE'
  return {
    id: isShowAllSections ? building : section,
    filter: isShowAllSections ? 'building' : 'section'
  }
}

function usePageProps(formReturn: UseFormReturn<TBaseForm>) {
  const [page, setPage] = useState(undefined)
  const elemPerPage = undefined
  const { view } = formReturn.watch()
  const pageParam = view === 'LIST' ? page : undefined
  const elemPerPageParam = view === 'LIST' ? elemPerPage : undefined
  return {
    pageParam,
    elemPerPageParam,
    setPage
  }
}

const ApartmentViewState = () => {
  const formReturn = useFormInit()
  useResetForm(formReturn)
  const { pageParam, elemPerPageParam } = usePageProps(formReturn)
  const objectParams = useObjectParams(formReturn)
  const { data } = useObjectChessQuery(objectParams, pageParam, elemPerPageParam)
  const { data: layoutData } = useLayoutsQuery(
    formReturn.watch('building'),
    formReturn.watch('section')
  )
  const filteredData = useFilteredData(formReturn, data)
  const layoutFilterData = useLayoutFilterData(formReturn, layoutData)
  const preparedApartmentData = usePrepareData(filteredData)
  const apartmentFilterData = useApartmentFilter(data)

  return {
    formReturn,
    objectQuery: useObjectChessQuery(objectParams),
    preparedApartmentData,
    apartmentFilterData,
    filteredData,
    layoutData,
    layoutFilterData
  }
}

export const [ApartmentViewProvider, useApartmentViewContext] = constate(ApartmentViewState)
