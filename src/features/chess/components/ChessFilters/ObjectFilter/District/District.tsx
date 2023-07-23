import { useDistrictQuery } from '../../../../querries'
import { useOptions } from '../../../../utils/useOptions'
import CustomSelectControl from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const District = ({ control }: any) => {
  const { data } = useDistrictQuery()
  const districtOptions = useOptions(data?.data)

  return (
    <CustomSelectControl
      control={control}
      name="district"
      placeholder="Выбор ЖК"
      options={districtOptions}
      handleError={(error: any) => error?.district}/>
  )
}

export default District
