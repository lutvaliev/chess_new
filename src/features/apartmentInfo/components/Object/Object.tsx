import classNames from 'classnames'
import Row from '../Row/Row'
import CustomAccordion from '../../../../core/components/CustomAccordion/CustomAccordion'
import DocumentIcon from '../../../../core/components/icons/SvgIcons/DocumentIcon'
import EditIcon from '../../../../core/components/icons/SvgIcons/EditIcon'
import PhoneIcon from '../../../../core/components/icons/SvgIcons/PhoneIcon'
import EmailIcon from '../../../../core/components/icons/SvgIcons/EmailIcon'
import styles from './Object.module.scss'

const Object = () => (
  <div>
    <div className={styles.body}>
      <div className={styles.generalInfo}>
        <div className={styles.sectionTitle}>
          Основная информация
          <DocumentIcon/>
        </div>
        <div className={styles.generalInfoWrapper}>
          <Row title="Этаж" value="1"/>
          <Row title="Количество уровней" value="1"/>
          <Row title="Количество комнат" value="3"/>
          <Row title="Планировка" value="3-2-1"/>
          <Row title="Жилая площадь, м²" value="32"/>
          <Row title="Общая площадь, м²:" value="55"/>
          <Row title="Отделка" value="Чистовая"/>
          <Row title="Санузел" value="Совмещенный"/>
          <div>{' '}</div>
          <Row title="Балконы, м²:" value="—"/>
          <Row title="Лоджии, м²" value="2"/>
          <Row title="Террасы, м²:" value="4"/>
        </div>
      </div>
      <div className={styles.description}>
        <CustomAccordion
          summary={(
            <div className={styles.summary}>
              Описание
              <EditIcon/>
            </div>
          )}
          details="В частности, высокое качество позиционных исследований обеспечивает актуальность укрепления моральных ценностей. Являясь всего лишь частью общей картины, тщательные исследования конкурентов, инициированные исключительно синтетически, функционально разнесены на независимые элементы. "/>
        <div className={styles.flatModel}>
          3D-модель квартиры
        </div>
      </div>
      <div className={styles.prices}>
        <div className={styles.sectionTitle}>
          Цены
          <EditIcon/>
        </div>
        <div className={styles.pricesInfo}>
          <Row title="Вид цены" value="Продажная"/>
          <Row title="Текущая цена, м²" value="70 000"/>
          <Row title="Текущая стоимость" value="5 184 200"/>
          <Row title="Вид цены" value="Субсидированная"/>
          <Row title="Текущая цена, м2²" value="80 000"/>
          <Row title="Текущая стоимость" value="6 184 200"/>
          <Row title="Сумма продажи" value="5 184 200"/>
          <Row title="Оплачено" value="5 184 200"/>
          <Row title="Долг клиента" value="0"/>
        </div>
        <div className={styles.discount}>
          <Row title="Скидки" value=""/>
          <div className={styles.discountValue}>
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
            <div className={styles.discountText}>Название скидки</div>
            <div className={styles.discountText}>5%</div>
            <div className={styles.discountText}>Название скидки</div>
            <div className={styles.discountText}>5%</div>
          </div>
        </div>
      </div>
      <div className={styles.deal}>
        <div className={styles.sectionTitle}>
          Сделка
          <DocumentIcon/>
        </div>
        <div className={styles.dealInfo}>
          <div className={styles.dealGeneralInfo}>
            <Row
              title="Клиент:"
              value={(
                <div className={styles.client}>
                  Пономарёва Лилия Витальевна
                </div>
              )}/>
            <Row
              title="Бронирование"
              value={(
                <div className={styles.document}>
                  <div>12.04.2022 - 12.05.2022</div>
                  <DocumentIcon/>
                </div>
              )}/>
            <Row title="Дата оформления сделки" value="12.фев.2022"/>
            <Row title="Автор сделки" value="Третьяков Арсений Михайлович"/>
            <Row title="Ответственный" value="Третьяков Арсений Михайлович"/>
          </div>
          <div className={styles.dealAdditionalInfo}>
            <Row
              title="Телефон"
              value={(
                <div className={styles.contacts}>
                  <div className={styles.phone}>+7 999 343 33 33</div>
                  <PhoneIcon/>
                  <EmailIcon/>
                </div>
              )}
            />
            <Row title="Способ оплаты" value="Рассрочка"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Object
