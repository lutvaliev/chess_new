import { Control, RegisterOptions, useController } from 'react-hook-form'
import { FC, memo, ReactNode, useMemo } from 'react'
import { InputAdornment, TextField, TextFieldProps } from '@mui/material'
import get from 'lodash/get'
import classNames from 'classnames'
import FormLabel from '../FormLabel/FormLabel'
import styles from './CustomInput.module.scss'

type TProps = {
  name: string
  control: Control<any>
  rules?: RegisterOptions
  handleChange?: (value: string) => string | number
  handleBlur?: (value: string) => string | number
  icon?: ReactNode,
  iconError?: ReactNode
  iconPosition?: 'start' | 'end'
  label?: string | null | ReactNode
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  textFieldClassName?: string
} & TextFieldProps

const CustomInput: FC<TProps> = ({
  control,
  name,
  rules,
  icon,
  iconError,
  iconPosition,
  handleChange,
  InputProps,
  label,
  labelPlacement = 'top',
  textFieldClassName,
  handleBlur,
  ...rest
}) => {
  const {
    field,
    formState: { errors }
  } = useController({
    name,
    control,
    rules
  })

  const [fieldName, idx, fieldSubName] = useMemo(() => name.split('.'), [name])
  return (
    <FormLabel label={label} labelPlacement={labelPlacement}>
      <TextField
        {...field}
        className={classNames(styles.input, textFieldClassName)}
        onChange={(e) => {
          // eslint-disable-next-line no-unused-expressions
          handleChange ? field.onChange(handleChange(e.target.value)) : field.onChange(e)
        }}
        onBlur={(e) => {
          // eslint-disable-next-line no-unused-expressions
          handleBlur ? field.onChange(handleBlur(e.target.value)) : field.onChange(e)
        }}
        fullWidth
        sx={{ marginTop: 1 }}
        InputProps={{
          inputProps: {
            maxLength: 256,
            'aria-label': fieldName
          },
          endAdornment: get(errors, name)
            ? <InputAdornment sx={{ color: 'red' }} position="end">{iconError}</InputAdornment>
            : undefined,
          startAdornment: icon
            ? (
              <InputAdornment
                sx={get(errors, name) && { color: 'red' }}
                position={iconPosition || 'start'}>
                {icon}
              </InputAdornment>
            )
            : undefined,
          ...InputProps
        }}
        error={errors.rules
          ? !!(errors as any)[fieldName]?.[Number(idx)]?.[fieldSubName]
          : !!get(errors, name)}
        helperText={get(errors, name) ? <span data-testid={`${fieldName}-error`}>{(get(errors, name) as any)?.message}</span> : ''}
        {...rest}
      />
    </FormLabel>
  )
}

export default memo(CustomInput)
