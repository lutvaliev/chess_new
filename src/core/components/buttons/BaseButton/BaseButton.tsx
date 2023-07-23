import { FC, ReactNode } from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import classNames from 'classnames'
import styles from './BaseButton.module.scss'

export type TButtonProps = {
  text?: string
  className?: string
  children?: ReactNode
} & ButtonProps

const BaseButton: FC<TButtonProps> = ({ text, className, children, ...props }) => (
  <MuiButton
    className={classNames(styles.button, className)}
    type="button"
    {...props}>
    {text || children}
  </MuiButton>
)

export default BaseButton
