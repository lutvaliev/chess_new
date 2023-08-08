import { FC } from 'react'
import { Control } from 'react-hook-form'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './CostBar.module.scss'

type TProps = {
  control: Control<any>
}
const CostBar: FC<TProps> = ({ control }) => (
  <div className={styles.wrapper}>
    <CustomInput
      name="cost.min"
      type="text"
      handleChange={floatFormat}
      label="от "
      labelPlacement="start"
      control={control}
    />
    <CustomInput
      name="cost.max"
      type="text"
      handleChange={floatFormat}
      label="до "
      labelPlacement="start"
      control={control}
    />
  </div>
)

export default CostBar
