import { useForm, UseFormReturn } from 'react-hook-form'
import constate from 'constate'
import { useEffect } from 'react'
import { useBuildingQuery, useDistrictQuery } from '../querries'

const useFormInit = () => useForm({
  mode: 'all',
  defaultValues:
       {
         district: '',
         building: '',
         section: '',
         apartmentLayout: '',
         cost: '',
         roomsValue: '',
         status: '',
         actions: ''
       }
})

function useResetForm(useFormReturn: UseFormReturn<any>) {
  const { data: districtData } = useDistrictQuery()
  const { data: objectData } = useBuildingQuery(districtData?.data[1]?.id)

  useEffect(() => {
    if (!districtData || !objectData) {
      return
    }

    useFormReturn.reset({
      district: districtData?.data[1]?.id,
      building: objectData?.data[0]?.id,
      section: ''
    })
  }, [districtData, objectData, useFormReturn])
}

const ChessState = () => {
  const formReturn = useFormInit()
  useResetForm(formReturn)
  return {
    ...formReturn
  }
}

export const [ChessProvider, useChessContext] = constate(ChessState)
