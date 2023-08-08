import { FC } from 'react'
import { Control } from 'react-hook-form'
import { floatFormat } from '../../../../../../core/utils/formFormat'
import CustomInput from '../../../../../../core/components/CustomInput/CustomInput'
import styles from './TotalAreaBar.module.scss'

type TProps = {
  control: Control<any>
}

const TotalAreaBar: FC<TProps> = ({ control }) => (
  <div className={styles.wrapper} >
    <CustomInput
      name="totalArea.min"
      type="text"
      handleChange={floatFormat}
      label="от "
      labelPlacement="start"
      control={control}
    />
    <CustomInput
      name="totalArea.max"
      type="text"
      handleChange={floatFormat}
      label="до "
      labelPlacement="start"
      control={control}
    />
  </div>
)

export default TotalAreaBar
