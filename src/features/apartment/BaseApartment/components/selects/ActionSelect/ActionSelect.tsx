import { FC } from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import styles from './ActionSelect.module.scss'
import { TBaseSelectProps } from '../../../types'

const ActionSelect: FC<TBaseSelectProps> = ({ control }) => (
  <CustomSelectControl
    control={control}
    name="actions"
    placeholder="Действия"
    options={[]}
    handleError={(error: any) => error?.actions}
    selectClassName={styles.select}
  />
)

export default ActionSelect
