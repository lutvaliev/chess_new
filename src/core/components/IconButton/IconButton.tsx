/* eslint-disable react/button-has-type */
import React from 'react'
import styles from './IconButton.module.scss'

interface IconButtonProps {
  icon: React.ReactNode
  onClick?: () => void
  ariaLabel: string
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, ariaLabel }) => (
  <button className={styles.iconButton} onClick={onClick} aria-label={ariaLabel}>
    {icon}
  </button>
)

export default IconButton
