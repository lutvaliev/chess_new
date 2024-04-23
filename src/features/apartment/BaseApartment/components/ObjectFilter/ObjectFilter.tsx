import { Button } from '@mui/material'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import DistrictSelect from '../selects/DistrictSelect/DistrictSelect'
import BuildingSelect from '../selects/BuildingSelect/BuildingSelect'
import SectionSelect from '../selects/SectionSelect/SectionSelect'
import styles from './ObjectFilter.module.scss'

const ObjectFilter = () => {
  const { formReturn: { control } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      <Button variant="contained" className={styles.button} onClick={() => window.history.go(-1)}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false">
          <path d="M12.9799 16.7467C12.1734 17.677 12.1734 19.0588 12.9799 19.9891L20.8525 29.0702C21.4223 29.7275 22.417 29.7984 23.0742 29.2286C23.7315 28.6588 23.8024 27.6641 23.2326 27.0068L15.7433 18.3679L23.2326 9.72903C23.8024 9.07178 23.7315 8.07707 23.0742 7.50728C22.417 6.93749 21.4223 7.0084 20.8525 7.66565L12.9799 16.7467Z" fill="#377dfc" />
        </svg>
      </Button>
      <span role="presentation" className="IconWrapper_iconWrapper__DpCfC">
        <svg width="21" height="37" viewBox="0 0.5 19 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" style={{ color: '#d9edfc', marginLeft: '-12px', height: '40px', background: '#F8F8F9' }}>
          <g id="Group 65">
            <path id="Rectangle 4569" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0V1Z" fill="#d9edfc" />
            <path id="Rectangle 4570" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0" stroke="#d9edfc" />
          </g>
        </svg>
      </span>
      <DistrictSelect control={control} />
      <span role="presentation" className="IconWrapper_iconWrapper__DpCfC">
        <svg width="21" height="37" viewBox="0 0.5 19 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" style={{ color: '#F8F8F9', marginLeft: '-3px', height: '40px' }}>
          <g id="Group 65">
            <path id="Rectangle 4569" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0V1Z" fill="#377DFC" />
            <path id="Rectangle 4570" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0" stroke="#D7DBDF" />
          </g>
        </svg>
      </span>
      <BuildingSelect control={control} />
      <span role="presentation" className="IconWrapper_iconWrapper__DpCfC">
        <svg width="21" height="37" viewBox="0 0.5 19 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" style={{ color: '#F8F8F9', marginLeft: '-3px', height: '40px', background: '#377dfc' }}>
          <g id="Group 65">
            <path id="Rectangle 4569" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0V1Z" fill="#377DFC" />
            <path id="Rectangle 4570" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0" stroke="#D7DBDF" />
          </g>
        </svg>
      </span>
      <SectionSelect control={control} />
    </div>
  )
}

export default ObjectFilter
