import React, { FC, useEffect, useState } from 'react'
import styles from './BaseHeader.module.scss'
import HeaderMain from '../HeaderMain/HeaderMain'
import ObjectFilter from '../ObjectFilter/ObjectFilter'
import ApartmentFilter from '../ApartmentFilter/ApartmentFilter'

const BaseHeader: FC = () => {
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Add view to the dependency array

  return (
    <div className={`${styles.header} ${isFixed ? styles.fixed : ''}`}>
      <ObjectFilter />
      <HeaderMain />
      <ApartmentFilter />
    </div>
  )
}

export default BaseHeader
