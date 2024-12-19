/* eslint-disable max-len */
import classNames from 'classnames'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useApartmentViewContext } from '../../../apartment/ApartmentView/state/ApartmentViewState'
import { useApartmentsQuery } from '../../../apartment/BaseApartment/querries'
import Row from '../Row/Row'
import PrimaryButton from '../../../../core/components/buttons/PrimaryButton/PrimaryButton'
import styles from './Object.module.scss'
import ModalForm from '../ModalForm/ModalForm'

const Object = ({ info, setAnalogues, type, layout_value }: any) => {
  console.log(layout_value)
  const {
    formReturn: { watch }
  } = useApartmentViewContext()
  const [district, building] = watch(['district', 'building'])
  const layout = type !== 'plan' ? info?.id_Layout : layout_value
  const { data } = useApartmentsQuery(district, building, layout)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFormType, setCurrentFormType] = useState('')

  const openModal = (formType: string) => {
    setCurrentFormType(formType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentFormType('')
  }

  return (
    <div className="plashka">
      <div className={`${styles.body} noPadding`}>
        <div className={styles.generalInfo}>
          <div className={styles.sectionTitle}>
            Основная информация
            {/* <DocumentIcon /> */}
          </div>
          <div className={styles.generalInfoWrapper}>
            <Row title="Этаж" value={info?.floor} />
            <Row title="Количество уровней" value={info?.Levels} />
            <Row title="Количество комнат" value={info?.rooms} />
            <Row title="Планировка" value={info?.Layout ?? info.layot} />
            <Row title="Жилая площадь, м²" value={info?.livingarea} />
            <Row title="Общая площадь, м²" value={info?.area} />
            <Row title="Отделка" value={info?.finishing} />
            <Row title="Санузел" value={info?.EnsuiteBathroom ? '+' : '-'} />
            <Row title="Террасы, м2" value={info?.EnsuiteBathroom ? '+' : '-'} />
            <Row title="Балконы, м2" value={info?.BalconyArea} />
            <Row title="Лоджии, м2" value={info?.Loggia} />
            <div> </div>
            {info?.Balconies?.map((balcon: any) => (
              <Row key={balcon.type} title={balcon.type} value={`${balcon.square_meters} м²`} />
            ))}
            {/* <Row title="Лоджии, м²" value="no info" />
          <Row title="Террасы, м²:" value="no info" /> */}
          </div>
        </div>
        <div className={styles.description}>
          <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel-header"
              aria-controls="panel-content"
              sx={{ padding: 0, fontWeight: 600 }}
            >
              Описание
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {info?.description || info?.Description}
            </AccordionDetails>
          </Accordion>
          {(info?.tour_3d || info?.PlanoplanLink) && (
            <div className={styles.flatModel}>
              <a href={info?.tour_3d || info?.PlanoplanLink} target="_blank" rel="noreferrer">
                3D-модель квартиры
              </a>
            </div>
          )}
        </div>
        <div className={styles.prices}>
          <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel-header"
              aria-controls="panel-content"
              sx={{ padding: 0, fontWeight: 600 }}
            >
              Цены
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className={styles.pricesInfo}>
                {info?.prices ? info?.prices?.map((price: any) => (
                  <div key={price.id} className={styles.row}>
                    <Row title="Вид цены" value={price.price_name} />
                    <Row title="Текущая цена, м²" value={`${price.price.toLocaleString()} ₽`} />
                    <Row title="Текущая стоимость" value={`${price.cost.toLocaleString()} ₽`} />
                  </div>
                )) : (
                  <div className={styles.row}>
                    <Row title="Минимальная цена" value={`${info.MinimalPrice.toLocaleString()} ₽`} />
                    <Row title="Максимальная цена" value={`${info.MaximalPrice.toLocaleString()} ₽`} />
                  </div>
                )}
                {/* <Row title="Вид цены" value="Субсидированная" />
              <Row title="Текущая цена, м2²" value="80 000" />
              <Row title="Текущая стоимость" value="6 184 200" /> */}
                {/* <Row title="Сумма продажи" value="5 184 200" />
              <Row title="Оплачено" value="5 184 200" />
              <Row title="Долг клиента" value="0" /> */}
              </div>
              <div className={styles.discount}>
                <Row title="Скидки" value={info.discount ? '' : '-'} />
                {info.discount ? (
                  <>
                    <div className={styles.discountValue} style={{ display: 'flex' }}>
                      <div className={classNames(styles.discountText, styles.discountHeader)}>
                        Название скидки
                      </div>
                      <div className={classNames(styles.discountText, styles.discountHeader)}>
                        Размер скидки
                      </div>
                    </div>
                    {info?.discounts?.map((discount: any) => (
                      <div key={discount.discount_id} style={{ display: 'flex' }}>
                        <div className={styles.discountText}>
                          {discount.discount_name ? discount.discount_name : ''}
                        </div>
                        <div className={styles.discountText}>
                          {discount.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {type !== 'PLAN' ? (
          <>
            {setAnalogues && (
              <div className={styles.stats}>
                <Row title="Еще квартир такого типа" value={data?.length} />
                <button
                  type="button"
                  className={styles.analogues}
                  onClick={() => setAnalogues(true)}
                >
                  Квартиры аналоги
                </button>
              </div>
            )}
            <div className={styles.chooseFlat}>
              <div className={styles.buttonsWrapper}>
                <PrimaryButton
                  text="Забронировать"
                  className={styles.button}
                  onClick={() => openModal('Забронировать')}
                />
                <PrimaryButton
                  text="Рассчитать Ипотеку"
                  className={styles.button}
                  onClick={() => openModal('Рассчитать Ипотеку')}
                />
                <PrimaryButton
                  text="Задать вопрос"
                  className={styles.button}
                  onClick={() => openModal('Задать вопрос')}
                />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.chooseFlat}>
            <h5>Выбрать квартиру</h5>
            <div className={styles.flatButtons}>
              <PrimaryButton
                text="Забронировать"
                className={styles.button}
                onClick={() => openModal('Забронировать')}
              />
              <PrimaryButton
                text="Рассчитать Ипотеку"
                className={styles.button}
                onClick={() => openModal('Рассчитать Ипотеку')}
              />
              <PrimaryButton
                text="Задать вопрос"
                className={styles.button}
                onClick={() => openModal('Задать вопрос')}
              />
            </div>
          </div>
        )}
        <ModalForm isOpen={isModalOpen} onClose={closeModal} formType={currentFormType} flatId={info.id} />
      </div>
    </div>
  )
}

export default Object
