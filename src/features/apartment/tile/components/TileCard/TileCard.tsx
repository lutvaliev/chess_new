import { FC, useState } from 'react'
import classNames from 'classnames'
import CustomTooltip from '../../../../../core/components/CustomTooltip/CustomTooltip'
import Card from '../../../BaseApartment/components/Card/Card'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import styles from './TileCard.module.scss'

type TProp = {
    rooms: number | string
    cost: number | string
    flatNumber: number | string
    pricePerMeter: number | string
    area: number | string
    isDisabled?: boolean
}

const TileCard: FC<TProp> = (
  {
    rooms,
    flatNumber,
    cost,
    pricePerMeter,
    area,
    isDisabled
  }
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // TODO usecallback
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
        {isDrawerOpen && <ApartmentInfoBase drawerClose={handleClose}/>}
      </CustomDrawer>
      <CustomTooltip title={(
        <Card
          rooms={rooms}
          flatNumber={flatNumber}
          cost={cost}
          pricePerMeter={pricePerMeter}
          area={area}
        />
      )}>
        { /* eslint-disable-next-line */}
        <div
          className={styles.card}
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className={classNames({ [styles.disabled]: isDisabled })}/>
          <p className={styles.text}>{rooms}</p>
        </div>
      </CustomTooltip>
    </>
  )
}

export default TileCard
