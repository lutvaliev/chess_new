import { useController } from 'react-hook-form'
import { memo, FC } from 'react'
import styles from './CustomSelectControl.module.scss'
import CustomSelectBase from '../CustomSelectBase/CustomSelectBase'
// import { useValidationRules } from '../../../../hooks/useValidationRules'

const CustomSelectControl = ({
  label,
  labelPlacement,
  control,
  options,
  multiple,
  name,
  handleError,
  isRequired,
  placeholder,
  ...rest
}: any) => {
  // const { requiredRule } = useValidationRules()
  const {
    field: { value: currentValue, onChange },
    formState: { errors }
  } = useController({
    name,
    control,
    rules: {
      // required: isRequired && requiredRule()
    }
  })
  const error = handleError?.(errors)

  return (
    <div className={styles.wrapper}>
      <CustomSelectBase
        multiple={multiple}
        isError={!!error}
        label={label}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        options={options}
        currentValue={currentValue}
        handleChange={onChange}
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  )
}

export default CustomSelectControl
