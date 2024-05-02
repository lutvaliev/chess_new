import React, { FC, useCallback, useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import CardSection from '../../../../../core/components/CardSection/CardSection'
import TotalAreaIcon from '../../../../../core/components/icons/SvgIcons/TotalAreaIcon'
import BalconyAreaIcon from '../../../../../core/components/icons/SvgIcons/BalconyAreaIcon'
import RubleIcon from '../../../../../core/components/icons/SvgIcons/RubleIcon'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import { TBalconies } from '../../../BaseApartment/types'
import styles from './Card.module.scss'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import { Discount } from '../../../../../img'

type TProps = {
  info: any,
  color: string,
  area: string | number,
  flatNumber?: number | string
  rooms: number | string
  pricePerSquare: number | string
  isDisabled?: boolean
  cost: string | number
  balconies: TBalconies[] | string | number
}

const Card: FC<TProps> = ({
  info,
  color,
  area,
  flatNumber,
  rooms,
  pricePerSquare,
  isDisabled,
  cost,
  balconies
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [bgColor, setBgColor] = useState<string | undefined>(undefined)
  const drawerRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    setIsDrawerOpen(false)
  }, [])

  useEffect(() => {
    const hexValue = color.replace('#', '')
    const r = parseInt(hexValue.substring(0, 2), 16)
    const g = parseInt(hexValue.substring(2, 4), 16)
    const b = parseInt(hexValue.substring(4, 6), 16)
    const formattedColor = `rgba(${r}, ${g}, ${b}, 0.3)`
    setBgColor(formattedColor)
  }, [color])

  // Event listener to detect clicks outside of the drawer
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log('dd')
        }
      }}
      style={{ backgroundColor: bgColor }}
      className={styles.card}
      onClick={(e: any) => handleClickOutside(e)}>
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose} info={info} />}
      </CustomDrawer>
      <div ref={drawerRef}>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              console.log('dd')
            }
          }}
          className={styles.wrapper}
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className={classNames({ [styles.disabled]: isDisabled })} />
          <div className={styles.header}>
            <div className={styles.info}>
              <div>
                <img src={Discount} alt="" width={40} style={{ marginTop: '5px' }} />
              </div>
              <div className={styles.bordered}>ВН</div>
              <div className={styles.bordered}>
                {rooms === 0 ? 'C' : `${rooms}К`}
              </div>
              <div className={styles.flatNumber}>
                №
                {flatNumber}
              </div>
            </div>
            <div className={styles.owner}> -</div>
          </div>
          <div style={{ backgroundColor: `#${color}` }} className={styles.line} />
          <div className={styles.additionalInfo}>
            <CardSection title={<TotalAreaIcon />} value={area} icon="м²" />
            <CardSection title={<BalconyAreaIcon />} value={balconies} />
            <CardSection title="За м²" value={pricePerSquare} icon={<div><RubleIcon /></div>} />
            <CardSection title="Всего" value={cost} icon={<div><RubleIcon /></div>} />
            <CardSection title="Продано" value="3 450 500" icon={<div><RubleIcon /></div>} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
