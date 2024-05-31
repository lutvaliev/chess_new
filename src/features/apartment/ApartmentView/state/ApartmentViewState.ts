import constate from 'constate'
import { useEffect, useMemo, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { defaultFormValues, TBaseForm, useBuildingQuery, useDistrictQuery, useSectionQuery, useLayoutsQuery } from '../../BaseApartment'
import { useApartmentsQuery, useObjectChessQuery } from '../../BaseApartment/querries'
import { useFilteredData } from '../../BaseApartment/utils/useFilterData'
import { prepareData } from '../../BaseApartment/utils/prepareData'
import { TObject, TObjectParams } from '../../BaseApartment/types'

const useFormInit = () => useForm<TBaseForm>({
  defaultValues: { ...defaultFormValues, view: 'TILE_PLUS' }
})

function useResetForm(
  { setValue }: UseFormReturn<TBaseForm>
) {
  const { data: districtData } = useDistrictQuery()
  const { data: buildingData } = useBuildingQuery(districtData?.[1]?.id)
  const { data: sectionData } = useSectionQuery('building', buildingData?.[0]?.id)
  const { data: layoutsData } = useLayoutsQuery(buildingData?.[0]?.id)
  // eslint-disable-next-line max-len
  const { data: apartmentsData } = useApartmentsQuery(districtData?.[1]?.id, buildingData?.[0]?.id, layoutsData?.[0]?.value)

  useEffect(() => {
    if (!districtData || !buildingData || !sectionData || !layoutsData || !apartmentsData) {
      return
    }
    setValue('district', districtData[1].id)
    setValue('building', buildingData[0].id)
    setValue('section', sectionData[0].id)
    setValue('layouts', layoutsData[0].value)
    setValue('apartments', apartmentsData[0])
  }, [districtData, buildingData, sectionData, layoutsData, apartmentsData])
}

function useApartmentFilter(data?: TObject[]) {
  return useMemo(() => {
    if (!data) return undefined

    return data.reduce((acc, currentValue) => {
      Object.entries(currentValue).forEach(([key, value]) => {
        if (key in acc) {
          acc[key].push(value)
        }
      })
      return {
        ...acc,
        rooms: acc.rooms.filter((room: any, index: any, self: any) => self.indexOf(room) === index)
        // rooms: [acc.rooms]
      }
    }, {
      rooms: [],
      area: [],
      cost: []
    } as any)
  }, [data])
}

function usePrepareData(data?: TObject[]) {
  return useMemo(() => (data?.length
    ? prepareData(data)
    : []),
  [data])
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
  const [page, setPage] = useState(1)
  const elemPerPage = 20
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
  const filteredData = useFilteredData(formReturn, data)
  const preparedApartmentData = usePrepareData(filteredData)
  const apartmentFilterData = useApartmentFilter(data)

  return {
    formReturn,
    objectQuery: useObjectChessQuery(objectParams),
    preparedApartmentData,
    apartmentFilterData,
    filteredData
  }
}

export const [ApartmentViewProvider, useApartmentViewContext] = constate(ApartmentViewState)
