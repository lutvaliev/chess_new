import { useController } from 'react-hook-form'
import { memo, FC } from 'react'
import styles from './CustomSelectControl.module.scss'
import CustomSelectBase from '../CustomSelectBase/CustomSelectBase'
import CustomSelectRoom from '../CustomSelectBase/CustomSelectRoom'
// import { useValidationRules } from '../../../../hooks/useValidationRules'

const CustomSelectControl = ({
  classname,
  label,
  labelPlacement,
  resetFlag,
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
    <div className={`${styles.wrapper} ${classname}`}>
      {name === 'room' ? (
        <CustomSelectRoom
          multiple={multiple}
          resetFlag={resetFlag}
          isError={!!error}
          label={label}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          options={options}
          currentValue={currentValue}
          handleChange={onChange}
          name={name}
          {...rest}
        />
      ) : (
        <CustomSelectBase
          multiple={multiple}
          resetFlag={resetFlag}
          isError={!!error}
          label={label}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          options={options}
          currentValue={currentValue}
          handleChange={onChange}
          name={name}
          {...rest}
        />
      )}
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  )
}

export default CustomSelectControl
