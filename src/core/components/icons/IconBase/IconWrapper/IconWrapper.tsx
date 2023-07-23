import React, { FC } from 'react'
import styles from './IconWrapper.module.scss'
import { TIconWrapperProps } from '../types'

export const IconWrapper: FC<TIconWrapperProps> = ({
  children,
  onClick,
  ...props
}) => {
  const svgBaseProps = {
    fill: 'currentColor',
    'aria-hidden': 'true',
    'user-select': 'none',
    focusable: 'false'
  }

  return (
    <span
      role="presentation"
      className={styles.iconWrapper}
      onClick={onClick}
    >
      {React.cloneElement(children, { ...svgBaseProps, ...props })}
    </span>
  )
}
