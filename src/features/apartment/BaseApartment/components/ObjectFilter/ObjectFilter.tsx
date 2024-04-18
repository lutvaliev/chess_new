import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import DistrictSelect from '../selects/DistrictSelect/DistrictSelect'
import BuildingSelect from '../selects/BuildingSelect/BuildingSelect'
import SectionSelect from '../selects/SectionSelect/SectionSelect'
import styles from './ObjectFilter.module.scss'

const ObjectFilter = () => {
  const { formReturn: { control } } = useApartmentViewContext()
  return (
    <div className={styles.wrapper}>
      <DistrictSelect control={control} />
      <span role="presentation" className="IconWrapper_iconWrapper__DpCfC">
        <svg width="21" height="37" viewBox="0 0.5 19 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" style={{ color: '#F8F8F9', marginLeft: '-3px', height: '39px' }}>
          <g id="Group 65">
            <path id="Rectangle 4569" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0V1Z" fill="#377DFC" />
            <path id="Rectangle 4570" d="M0 1H15.6667C18.3333 1 20.2533 3.56 19.5067 6.12L11.34 34.12C10.8422 35.8267 9.27778 37 7.5 37H0" stroke="#D7DBDF" />
          </g>
        </svg>
      </span>
      <BuildingSelect control={control} />
      <span role="presentation" className="IconWrapper_iconWrapper__DpCfC">
        <svg width="21" height="37" viewBox="0 0.5 19 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" style={{ color: '#F8F8F9', marginLeft: '-3px', height: '39px', background: '#377dfc' }}>
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
