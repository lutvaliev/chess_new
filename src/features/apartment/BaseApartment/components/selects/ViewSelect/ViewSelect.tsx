import { FC } from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import styles from './ViewSelect.module.scss'

const ViewSelect: FC<TBaseSelectProps> = ({ control }) => {
  const options = [
    // {
    //   label: 'Шахматка',
    //   value: 'CHESS'
    // },
    {
      label: 'Плитка',
      value: 'TILE'
    },
    {
      label: 'Плитка+',
      value: 'TILE_PLUS'
    },
    {
      label: 'Список',
      value: 'LIST'
    },
    {
      label: 'Планировка',
      value: 'PLAN'
    }
  ]
  return (
    <CustomSelectControl
      control={control}
      name="view"
      placeholder="Вид"
      options={options}
      handleError={(error: any) => error?.view}
      selectClassName={styles.wrapper}
    />
  )
}

export default ViewSelect
