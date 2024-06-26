import { FC, useState, useRef } from 'react'
import classNames from 'classnames'
import Card from '../../../BaseApartment/components/Card/Card'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import styles from './TilePlusCard.module.scss'

type TProp = {
    color: any
    info: any
    discounts: any
    secondestate: boolean
    rooms: number | string
    cost: number | string
    flatNumber: number | string
    pricePerMeter: number | string
    area: number | string
    isDisabled?: boolean
}

const TilePlusCard: FC<TProp> = (
  {
    color,
    info,
    discounts,
    secondestate,
    rooms,
    flatNumber,
    cost,
    pricePerMeter,
    area,
    isDisabled
  }
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleClose = () => setIsDrawerOpen(false)
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
      onClick={(e: any) => handleClickOutside(e)}
    >
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose} info={info}/>}
      </CustomDrawer>
      { /* eslint-disable-next-line */}
      <div
        ref={drawerRef}
        className={styles.cardWrapper}
        onClick={() => setIsDrawerOpen(true)}
      >
        <div className={classNames({ [styles.disabled]: isDisabled })}/>
        <Card
          color={info.color}
          discounts={discounts}
          secondestate={secondestate}
          rooms={rooms}
          flatNumber={flatNumber}
          cost={cost}
          area={area}
          pricePerMeter={pricePerMeter}
        />
      </div>
    </div>
  )
}

export default TilePlusCard
