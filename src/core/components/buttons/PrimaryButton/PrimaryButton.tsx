import { FC } from 'react'
import classNames from 'classnames'
import BaseButton, { TButtonProps } from '../BaseButton/BaseButton'
import styles from './PrimaryButton.module.scss'

const PrimaryButton: FC<TButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props} className={classNames(styles.primaryButton, props.className)}>
    {children}
  </BaseButton>
)

export default PrimaryButton
