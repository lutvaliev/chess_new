import classNames from 'classnames'
import Row from '../Row/Row'
import CustomAccordion from '../../../../core/components/CustomAccordion/CustomAccordion'
import DocumentIcon from '../../../../core/components/icons/SvgIcons/DocumentIcon'
import EditIcon from '../../../../core/components/icons/SvgIcons/EditIcon'
import PhoneIcon from '../../../../core/components/icons/SvgIcons/PhoneIcon'
import EmailIcon from '../../../../core/components/icons/SvgIcons/EmailIcon'
import styles from './Object.module.scss'

const Object = ({ info }: any) => (
  <div>
    <div className={styles.body}>
      <div className={styles.generalInfo}>
        <div className={styles.sectionTitle}>
          Основная информация
          <DocumentIcon />
        </div>
        <div className={styles.generalInfoWrapper}>
          <Row title="Этаж" value={info.floor} />
          <Row title="Количество уровней" value="no info" />
          <Row title="Количество комнат" value={info.rooms} />
          <Row title="Планировка" value="no info" />
          <Row title="Жилая площадь, м²" value="32" />
          <Row title="Общая площадь, м²:" value="55" />
          <Row title="Отделка" value="no info" />
          <Row title="Санузел" value="no info" />
          <div>{' '}</div>
          {info.Balconies.map((balcon: any) => (
            <Row key={balcon.type} title={balcon.type} value={`${balcon.square_meters} м²`} />
          ))}
          {/* <Row title="Лоджии, м²" value="no info" />
          <Row title="Террасы, м²:" value="no info" /> */}
        </div>
      </div>
      <div className={styles.description}>
        <CustomAccordion
          summary={(
            <div className={styles.summary}>
              Описание
              <EditIcon />
            </div>
          )}
          details="В частности, высокое качество позиционных исследований обеспечивает актуальность укрепления моральных ценностей. Являясь всего лишь частью общей картины, тщательные исследования конкурентов, инициированные исключительно синтетически, функционально разнесены на независимые элементы. " />
        <div className={styles.flatModel}>
          <a href={info.tour_3d}>3D-модель квартиры</a>
        </div>
      </div>
      <div className={styles.prices}>
        <div className={styles.sectionTitle}>
          Цены
          <EditIcon />
        </div>
        <div className={styles.pricesInfo}>
          <Row title="Вид цены" value="Продажная" />
          <Row title="Текущая цена, м²" value="70 000" />
          <Row title="Текущая стоимость" value="5 184 200" />
          <Row title="Вид цены" value="Субсидированная" />
          <Row title="Текущая цена, м2²" value="80 000" />
          <Row title="Текущая стоимость" value="6 184 200" />
          <Row title="Сумма продажи" value="5 184 200" />
          <Row title="Оплачено" value="5 184 200" />
          <Row title="Долг клиента" value="0" />
        </div>
        <div className={styles.discount}>
          <Row title="Скидки" value="" />
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
      </div>
    </div>
  </div>
)

export default Object
