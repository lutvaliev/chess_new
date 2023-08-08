import { FC, useMemo } from 'react'
import CustomSelectControl from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import styles from './StatusSelect.module.scss'

// function useOptions() {
//   const { apartmentFilterData } = useBaseApartmentContext()
//
//   return useMemo(() => {
//     apartmentFilterData
//       ? []
//       : []
//   }, [apartmentFilterData])
// }

const StatusSelect: FC<TBaseSelectProps> = ({ control }) => {
  const options = [
    {
      label: 'Все статусы',
      value: 'allStatuses'
    }
  ]
  return (
    <CustomSelectControl
      control={control}
      name="status"
      placeholder="Статус"
      options={options}
      handleError={(error: any) => error?.status}
      selectClassName={styles.wrapper}
    />
  )
}

export default StatusSelect
