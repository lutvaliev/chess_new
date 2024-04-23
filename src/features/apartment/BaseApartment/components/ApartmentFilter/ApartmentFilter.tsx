import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import StatusSelect from '../selects/StatusSelect/StatusSelect'
import RoomSelect from '../selects/RoomSelect/RoomSelect'
import TotalAreaBar from '../bar/TotalAreaBar/TotalAreaBar'
import CostBar from '../bar/CostBar/CostBar'
import styles from './ApartmentFilter.module.scss'

const ApartmentFilter = () => {
  const { formReturn: { control, watch } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      <div className={styles.selects}>
        {/* <StatusSelect control={control}/> */}
        <RoomSelect control={control} />
        {/* <button type="button" className={styles.button}>Без ВП</button> */}
      </div>
      <div className={styles.metrics}>
        <div className={styles.bar}>
          <div>Площадь:</div>
          <TotalAreaBar control={control} />
        </div>
        <div className={styles.bar}>
          <div>Стоимость:</div>
          <CostBar control={control} />
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.resetBtn} onClick={() => window.location.reload()}>
            <span>Сбросить фильры</span>
            <span role="presentation">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false">
                <rect x="4.3" y="4.3" width="16.4" height="16.4" rx="8.2" stroke="#127CCA" strokeWidth="1.6" />
                <path d="M9.37289 8.30777C9.05884 7.99631 8.54967 7.99631 8.23562 8.30777C7.92157 8.61924 7.92157 9.12422 8.23562 9.43568L11.3253 12.5L8.23554 15.5643C7.92149 15.8758 7.92149 16.3808 8.23554 16.6922C8.54958 17.0037 9.05876 17.0037 9.37281 16.6922L12.4626 13.6279L15.6272 16.7664C15.9412 17.0779 16.4504 17.0779 16.7645 16.7664C17.0785 16.4549 17.0785 15.95 16.7645 15.6385L13.5999 12.5L16.7644 9.3615C17.0784 9.05004 17.0784 8.54506 16.7644 8.2336C16.4503 7.92213 15.9412 7.92213 15.6271 8.2336L12.4626 11.3721L9.37289 8.30777Z" fill="#127CCA" />
              </svg>
            </span>
          </button>
          <button type="button" className={styles.filterBtn}>
            <span role="presentation">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.5 11.5C11.1569 11.5 12.5 10.1569 12.5 8.5C12.5 6.84315 11.1569 5.5 9.5 5.5C8.12019 5.5 6.95794 6.43153 6.60785 7.7H4.3C3.85817 7.7 3.5 8.05817 3.5 8.5C3.5 8.94183 3.85817 9.3 4.3 9.3H6.60785C6.95794 10.5685 8.12019 11.5 9.5 11.5ZM9.5 9.9C10.2732 9.9 10.9 9.2732 10.9 8.5C10.9 7.7268 10.2732 7.1 9.5 7.1C8.7268 7.1 8.1 7.7268 8.1 8.5C8.1 9.2732 8.7268 9.9 9.5 9.9Z" fill="#127CCA" />
                <path d="M12.3922 9.3C12.4625 9.04531 12.5 8.77704 12.5 8.5C12.5 8.22296 12.4625 7.95469 12.3922 7.7H20.7C21.1418 7.7 21.5 8.05817 21.5 8.5C21.5 8.94183 21.1418 9.3 20.7 9.3H12.3922Z" fill="#127CCA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5 19.5C13.8431 19.5 12.5 18.1569 12.5 16.5C12.5 14.8431 13.8431 13.5 15.5 13.5C16.8798 13.5 18.0421 14.4315 18.3922 15.7H20.7C21.1418 15.7 21.5 16.0582 21.5 16.5C21.5 16.9418 21.1418 17.3 20.7 17.3H18.3922C18.0421 18.5685 16.8798 19.5 15.5 19.5ZM15.5 17.9C14.7268 17.9 14.1 17.2732 14.1 16.5C14.1 15.7268 14.7268 15.1 15.5 15.1C16.2732 15.1 16.9 15.7268 16.9 16.5C16.9 17.2732 16.2732 17.9 15.5 17.9Z" fill="#127CCA" />
                <path d="M12.6078 17.3C12.5375 17.0453 12.5 16.777 12.5 16.5C12.5 16.223 12.5375 15.9547 12.6078 15.7H4.3C3.85817 15.7 3.5 16.0582 3.5 16.5C3.5 16.9418 3.85817 17.3 4.3 17.3H12.6078Z" fill="#127CCA" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApartmentFilter
