import classNames from 'classnames'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useApartmentViewContext } from '../../../apartment/ApartmentView/state/ApartmentViewState'
import { useApartmentsQuery } from '../../../apartment/BaseApartment/querries'
import Row from '../Row/Row'
import PrimaryButton from '../../../../core/components/buttons/PrimaryButton/PrimaryButton'
import styles from './Object.module.scss'

const Object = ({ info, setAnalogues }: any) => {
  const {
    formReturn: {
      watch
    }
  } = useApartmentViewContext()
  const [district, building] = watch(['district', 'building'])
  const layout = info.id_Layout
  const { data } = useApartmentsQuery(district, building, layout)
  console.log(data, 'ayka')
  return (
    <div className="plashka">
      <div className={`${styles.body} noPadding`}>
        <div className={styles.generalInfo}>
          <div className={styles.sectionTitle}>
            Основная информация
            {/* <DocumentIcon /> */}
          </div>
          <div className={styles.generalInfoWrapper}>
            <Row title="Этаж" value={info.floor} />
            <Row title="Количество уровней" value={info.Levels} />
            <Row title="Количество комнат" value={info.rooms} />
            <Row title="Планировка" value={info.Layout} />
            <Row title="Жилая площадь, м²" value={info.livingarea} />
            <Row title="Общая площадь, м²" value={info.area} />
            <Row title="Отделка" value={info.finishing} />
            <Row title="Санузел" value={info.EnsuiteBathroom} />
            <div>{' '}</div>
            {info.Balconies.map((balcon: any) => (
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
              sx={{ padding: 0 }}>
              Описание
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {info.description}
            </AccordionDetails>
          </Accordion>
          <div className={styles.flatModel}>
            <a href={info.tour_3d}>3D-модель квартиры</a>
          </div>
        </div>
        <div className={styles.prices}>

          <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel-header"
              aria-controls="panel-content"
              sx={{ padding: 0 }}>
              Цены
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className={styles.pricesInfo}>
                {info.prices.map((price: any) => (
                  <div key={price.id} className={styles.row}>
                    <Row title="Вид цены" value={price.price_name} />
                    <Row title="Текущая цена, м²" value={price.price.toLocaleString()} />
                    <Row title="Текущая стоимость" value={price.cost.toLocaleString()} />
                  </div>
                ))}
                {/* <Row title="Вид цены" value="Субсидированная" />
              <Row title="Текущая цена, м2²" value="80 000" />
              <Row title="Текущая стоимость" value="6 184 200" /> */}
                {/* <Row title="Сумма продажи" value="5 184 200" />
              <Row title="Оплачено" value="5 184 200" />
              <Row title="Долг клиента" value="0" /> */}
              </div>
              <div className={styles.discount}>
                <Row title="Скидки" value="" />
                <div className={styles.discountValue} style={{ display: 'flex' }}>
                  <div
                    className={classNames(styles.discountText, styles.discountHeader)}
                  >
                    Название скидки
                  </div>
                  <div
                    className={classNames(styles.discountText, styles.discountHeader)}
                  >
                    Размер скидки
                  </div>
                </div>
                {info.discounts.map((discount: any) => (
                  <div key={discount.discount_id} style={{ display: 'flex' }}>
                    <div className={styles.discountText}>{discount.discount_name ? discount.discount_name : ''}</div>
                    <div className={styles.discountText}>{discount.amount.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.stats}>
          <Row title="Еще квартир такого типа" value={data?.length} />
          <button type="button" className={styles.analogues} onClick={() => setAnalogues(true)}>Квартиры аналоги</button>
        </div>
        <div className={styles.buttonsWrapper}>
          <PrimaryButton text="Забронировать" className={styles.button} />
          <PrimaryButton text="Рассчитать Ипотеку" className={styles.button} />
          <PrimaryButton text="Задать вопрос" className={styles.button} />
        </div>
        {/* <div className={styles.deal}>
        <div className={styles.sectionTitle}>
          Сделка
          <DocumentIcon />
        </div>
        <div className={styles.dealInfo}>
          <div className={styles.dealGeneralInfo}>
            <Row
              title="Клиент"
              value={(
                <div className={styles.client}>
                  no info
                </div>
              )} />
            <Row
              title="Бронирование"
              value={(
                <div className={styles.document}>
                  <div>12.04.2022 - 12.05.2022</div>
                  <DocumentIcon />
                </div>
              )} />
            <Row title="Дата оформления сделки" value="12.фев.2022" />
            <Row title="Автор сделки" value="no info" />
            <Row title="Ответственный" value="no info" />
          </div>
          <div className={styles.dealAdditionalInfo}>
            <Row
              title="Телефон"
              value={(
                <div className={styles.contacts}>
                  <div className={styles.phone}>no info</div>
                  <PhoneIcon />
                  <EmailIcon />
                </div>
              )}
            />
            <Row title="Способ оплаты" value="Рассрочка" />
          </div>
        </div>
      </div> */}
      </div>
    </div>
  )
}

export default Object
