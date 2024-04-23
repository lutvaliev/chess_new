import classNames from 'classnames'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Row from '../Row/Row'
import CustomAccordion from '../../../../core/components/CustomAccordion/CustomAccordion'
import PrimaryButton from '../../../../core/components/buttons/PrimaryButton/PrimaryButton'
import DocumentIcon from '../../../../core/components/icons/SvgIcons/DocumentIcon'
import EditIcon from '../../../../core/components/icons/SvgIcons/EditIcon'
import PhoneIcon from '../../../../core/components/icons/SvgIcons/PhoneIcon'
import EmailIcon from '../../../../core/components/icons/SvgIcons/EmailIcon'
import styles from './Object.module.scss'

const Object = ({ info }: any) => (
  <div>
    <div className={`${styles.body} noPadding`}>
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
        <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel-header"
            aria-controls="panel-content"
            sx={{ padding: 0 }}>
            Описание
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            В частности, высокое качество позиционных исследований обеспечивает актуальность...
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
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.stats}>
        <Row title="Еще квартир такого типа" value="7" />
        <div className={styles.analogues}>Квартиры аналоги</div>
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

export default Object
