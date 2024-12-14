/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useCallback, useState, useRef } from 'react'
import styles from './PlanCard.module.scss'
import CustomDrawer from '../../../../../core/components/CustomDrawer/CustomDrawer'
import PlanInfo from '../../../../apartmentInfo/components/ApartmentInfoBase/PlanInfoBase'
import { getImageSrc } from '../../../utils/getImageSrc'
import defaultImage from '../../../../../img/featured.png'

type TProps = {
  layout: any
  handleOpen: any
}

function normalizeNumber(number: any) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    maximumFractionDigits: 1
  })
  return formatter.format(number / 1000000)
}

const PlanCard: FC<TProps> = ({ layout, handleOpen }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(() => setIsDrawerOpen(false), [])
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false)
    }
  }

  return (
    <div className={styles.card} onClick={(e: any) => handleClickOutside(e)}>
      <CustomDrawer
        anchor="right"
        hideBackdrop
        isOpen={isDrawerOpen}
        onClose={handleClose}
        className={styles.drawer}
      >
        {isDrawerOpen && (
          <PlanInfo
            drawerClose={handleClose}
            info={layout.parameters}
            img={layout.img_adress}
            label={layout.label}
            layout={layout}
          />
        )}
      </CustomDrawer>
      {/* eslint-disable-next-line */}
      <div>
        <div
          className={styles.container}
          key={layout.value}
          ref={drawerRef}
        >
          <div className={styles.header}>
            <div className={styles.row}>
              <p className={styles.title}>
                {layout.label}
                {/* {' '}
                <span>корп. 2 секц 2</span> */}
              </p>
              <div className={styles.circle}>{layout.count_aparts}</div>
            </div>
            <div className={styles.row} style={{ justifyContent: 'flex-end' }}>
              {/* <p>Заселение до 1 мар. 2025</p> */}
              <p>Квартиры в наличии</p>
            </div>
          </div>
          <div className={styles.img} onClick={() => handleOpen(layout.img_adress.find((plane: any) => plane.endsWith('.png')))}>
            <img
              src={layout.img_adress.find((plane: any) => plane.endsWith('.png')) || defaultImage}
              alt="apart"
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_title}>
              {layout.parameters.layot}
              {' '}
              до
              {' '}
              {layout.parameters.area}
              {' '}
              м²
            </div>
            {/* <div className={styles.footer_subtitle}>В ипотеку - от 11 605 ₽/мес.</div> */}
            <div className={styles.footer_row}>
              <div className={styles.left}>
                <p>
                  от
                  {' '}
                  {normalizeNumber(layout.parameters.MinimalPrice)}
                  {' '}
                  млн ₽
                </p>
                {/* <p>3 - 17 этаж</p> */}
              </div>
              <div onClick={() => setIsDrawerOpen(true)} className={styles.link}>
                Подробнее
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanCard
