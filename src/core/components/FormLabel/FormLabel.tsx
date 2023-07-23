import { FormControlLabel as Label, FormControlLabelProps } from '@mui/material'
import { FC, ReactElement, ReactNode } from 'react'
import styles from './FormLabel.module.scss'

type TProps = {
  children: ReactElement
  label?: string | null | ReactNode
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
} & Omit<FormControlLabelProps, 'control'>
const FormLabel: FC<TProps> = ({
  children,
  labelPlacement,
  label,
  ...rest
}) => (
  <Label
    className={styles.label}
    label={label}
    labelPlacement={labelPlacement}
    control={children}
    {...rest}
  />
)

export default FormLabel
