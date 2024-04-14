import { FC, useState } from 'react'
import classNames from 'classnames'
import Card from '../../../BaseApartment/components/Card/Card'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import styles from './TilePlusCard.module.scss'

type TProp = {
    info: any,
    rooms: number | string
    cost: number | string
    flatNumber: number | string
    pricePerMeter: number | string
    area: number | string
    isDisabled?: boolean
}

const TilePlusCard: FC<TProp> = (
  {
    info,
    rooms,
    flatNumber,
    cost,
    pricePerMeter,
    area,
    isDisabled
  }
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleClose = () => setIsDrawerOpen(false)
  return (
    <>
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
        className={styles.cardWrapper}
        onClick={() => setIsDrawerOpen(true)}
      >
        <div className={classNames({ [styles.disabled]: isDisabled })}/>
        <Card
          rooms={rooms}
          flatNumber={flatNumber}
          cost={cost}
          area={area}
          pricePerMeter={pricePerMeter}
        />
      </div>
    </>
  )
}

export default TilePlusCard
