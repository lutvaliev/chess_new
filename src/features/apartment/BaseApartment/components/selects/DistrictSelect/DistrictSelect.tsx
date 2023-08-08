import { FC, useMemo } from 'react'
import CustomSelectControl from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import { useDistrictQuery } from '../../../querries'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from './DistrictSelect.module.scss'

function useOptions() {
  const { data } = useDistrictQuery()

  return useMemo(() => {
    if (!data) {
      return []
    }
    return data.map(({ id, name }: any) => ({ value: id, label: name }))
  }, [data])
}

const DistrictSelect: FC<TBaseSelectProps> = ({ control }) => {
  const { objectQuery: { data } } = useApartmentViewContext()
  const options = useOptions()

  return (
    <CustomSelectControl
      control={control}
      name="district"
      placeholder="Выбор ЖК"
      options={options}
      disabled={!data}
      handleError={(error: any) => error?.district}
      selectClassName={styles.wrapper}
    />
  )
}

export default DistrictSelect
