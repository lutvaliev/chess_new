import { FC, useCallback, useState } from 'react'
import classNames from 'classnames'
import CardSection from '../../../../../core/components/CardSection/CardSection'
import TotalAreaIcon from '../../../../../core/components/icons/SvgIcons/TotalAreaIcon'
import BalconyAreaIcon from '../../../../../core/components/icons/SvgIcons/BalconyAreaIcon'
import RubleIcon from '../../../../../core/components/icons/SvgIcons/RubleIcon'
import ApartmentInfoBase from '../../../../apartmentInfo/components/ApartmentInfoBase/ApartmentInfoBase'
import { TBalconies } from '../../../BaseApartment/types'
import styles from './Card.module.scss'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'

type TProps = {
    area: string | number,
    flatNumber?: number | string
    rooms: number | string
    pricePerSquare: number | string
    isDisabled?: boolean
    cost: string | number
    balconies: TBalconies[] | string | number
}

const Card: FC<TProps> = (
  {
    area,
    flatNumber,
    rooms,
    pricePerSquare,
    isDisabled,
    cost,
    balconies
  }
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleClose = useCallback(
    () => setIsDrawerOpen(false),
    []
  )

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
      { /* eslint-disable-next-line */}
      <div
        className={styles.wrapper}
        onClick={() => setIsDrawerOpen(true)}
      >
        <div className={classNames({ [styles.disabled]: isDisabled })}/>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.bordered}>99,%</div>
            <div className={styles.bordered}>ВН</div>
            <div className={styles.bordered}>
              {rooms}
              К
            </div>
            <div className={styles.flatNumber}>
              №
              {flatNumber}
            </div>
          </div>
          <div className={styles.owner}> -</div>
        </div>
        <div className={styles.line}/>
        <div className={styles.additionalInfo}>
          <CardSection title={<TotalAreaIcon/>} value={area} icon="м²"/>
          <CardSection title={<BalconyAreaIcon/>} value={balconies}/>
          <CardSection title="За м²" value={pricePerSquare} icon={<div><RubleIcon/></div>}/>
          <CardSection title="Всего" value={cost} icon={<div><RubleIcon/></div>}/>
          <CardSection title="Продано" value="3 450 500" icon={<div><RubleIcon/></div>}/>
        </div>
      </div>
    </>
  )
}
// TODO memo
export default Card