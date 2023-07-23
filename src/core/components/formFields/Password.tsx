import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import CustomInput from '../CustomInput/CustomInput'
// import { useValidationRules } from '../../hooks/useValidationRules'

type TProps = {
  isRequired?: boolean
  isPasswordValidation?: boolean
  label?: string
}
const Password: FC<TProps> = ({
  isRequired = true,
  isPasswordValidation = true,
  label
}) => {
  // const { requiredRule, passwordValidation } = useValidationRules()
  const { control } = useFormContext()

  return (
    <CustomInput
      label={`${label || 'Пароль'} ${isRequired ? '*' : ''}`}
      name="password"
      type="password"
      control={control}
      rules={{
        // required: isRequired ? requiredRule() : undefined,
        // validate: isPasswordValidation ? (value:any) => passwordValidation(value) : undefined
      }}
    />
  )
}

export default Password
