import { useChessContext } from '../../../../state/useChessState'
import { useSectionQuery } from '../../../../querries'
import { useOptions } from '../../../../utils/useOptions'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const Section = ({ control }: any) => {
  const { watch } = useChessContext()
  const buildingId = watch('building')

  const { data } = useSectionQuery(buildingId, 'building')
  const sectionOptions = useOptions(data?.data)

  return (
    <CustomSelectControl
      control={control}
      name="section"
      placeholder="Выбор Подъезда"
      options={sectionOptions}
      handleError={(error: any) => error?.section}/>
  )
}

export default Section
