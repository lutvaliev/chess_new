import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import CustomInput from '../CustomInput/CustomInput'
// import { useValidationRules } from '../../hooks/useValidationRules'

type TProps = {
  isEmailValidation?: boolean
  isDisabled?: boolean
}
const Email: FC<TProps> = ({ isEmailValidation, isDisabled }) => {
  // const { requiredRule, emailValidation } = useValidationRules()
  const { control } = useFormContext()

  return (
    <CustomInput
      label="Почта"
      name="email"
      control={control}
      disabled={isDisabled}
      rules={{
        // required: requiredRule(),
        // validate: isEmailValidation ? emailValidation : undefined
      }}
    />
  )
}

export default Email
