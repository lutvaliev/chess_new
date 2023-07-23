import { useChessContext } from '../../../../state/useChessState'
import { useBuildingQuery } from '../../../../querries'
import { useOptions } from '../../../../utils/useOptions'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const Building = ({ control }: any) => {
  const { watch } = useChessContext()
  const districtId = watch('district')

  const { data } = useBuildingQuery(districtId)
  const buildingOptions = useOptions(data?.data)

  return (
    <CustomSelectControl
      control={control}
      name="building"
      placeholder="Выбор ГП"
      options={buildingOptions}
      handleError={(error: any) => error?.building}
    />
  )
}

export default Building
