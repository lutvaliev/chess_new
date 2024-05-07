import { Button } from '@mui/material'
import { useState } from 'react'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import DistrictSelect from '../selects/DistrictSelect/DistrictSelect'
import BuildingSelect from '../selects/BuildingSelect/BuildingSelect'
import SectionSelect from '../selects/SectionSelect/SectionSelect'
import styles from './ObjectFilter.module.scss'
import { Planirovka, PlitkaPlus, Spisok } from '../../../../../img'

const ObjectFilter = () => {
  const [show, setShow] = useState(true)
  const { formReturn: { control } } = useApartmentViewContext()
  const handleChessClick = (e: string) => {
    const list = document.querySelector('[data-value="LIST"]') as HTMLButtonElement
    const plitka = document.querySelector('[data-value="TILE"]') as HTMLButtonElement
    const plitkaplus = document.querySelector('[data-value="TILE_PLUS"]') as HTMLButtonElement
    const plan = document.querySelector('[data-value="PLAN"]') as HTMLButtonElement
    if (e === 'LIST') {
      list.click()
    }
    if (e === 'TILE') {
      plitka.click()
    }
    if (e === 'TILE_PLUS') {
      plitkaplus.click()
    }
    if (e === 'PLAN') {
      plan.click()
    }
  }
  function toggleAdditionalButtons() {
    const additionalButtons = document.getElementById('additionalButtons')

    if (additionalButtons) {
      if (additionalButtons.style.display === 'none' || additionalButtons.style.display === '') {
        additionalButtons.style.display = 'flex'
      } else {
        additionalButtons.style.display = 'none'
      }
    }
  }
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
      <div className={styles.view_buttons} style={{ display: 'flex', flexDirection: 'row' }}>
        <Button onClick={() => handleChessClick('TILE_PLUS')}>
          <img src={PlitkaPlus} alt="" />
        </Button>
        <Button onClick={() => handleChessClick('TILE')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" user-select="none" focusable="false" className="HeaderMain_button__O0eV8">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 5.5C3 4.11929 4.11929 3 5.5 3H8.97059C10.3513 3 11.4706 4.11929 11.4706 5.5V8.97059C11.4706 10.3513 10.3513 11.4706 8.97059 11.4706H5.5C4.11929 11.4706 3 10.3513 3 8.97059V5.5ZM5.5 4.6H8.97059C9.46764 4.6 9.87059 5.00295 9.87059 5.5V8.97059C9.87059 9.46764 9.46764 9.87059 8.97059 9.87059H5.5C5.00294 9.87059 4.6 9.46764 4.6 8.97059V5.5C4.6 5.00294 5.00295 4.6 5.5 4.6Z" fill="#127CCA" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5293 5.5C12.5293 4.11929 13.6486 3 15.0293 3H18.4999C19.8806 3 20.9999 4.11929 20.9999 5.5V8.97059C20.9999 10.3513 19.8806 11.4706 18.4999 11.4706H15.0293C13.6486 11.4706 12.5293 10.3513 12.5293 8.97059V5.5ZM15.0293 4.6H18.4999C18.9969 4.6 19.3999 5.00295 19.3999 5.5V8.97059C19.3999 9.46764 18.9969 9.87059 18.4999 9.87059H15.0293C14.5322 9.87059 14.1293 9.46764 14.1293 8.97059V5.5C14.1293 5.00294 14.5322 4.6 15.0293 4.6Z" fill="#127CCA" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12.5294C4.11929 12.5294 3 13.6487 3 15.0294V18.5C3 19.8807 4.11929 21 5.5 21H8.97059C10.3513 21 11.4706 19.8807 11.4706 18.5V15.0294C11.4706 13.6487 10.3513 12.5294 8.97059 12.5294H5.5ZM8.97059 14.1294H5.5C5.00295 14.1294 4.6 14.5324 4.6 15.0294V18.5C4.6 18.9971 5.00294 19.4 5.5 19.4H8.97059C9.46764 19.4 9.87059 18.9971 9.87059 18.5V15.0294C9.87059 14.5324 9.46764 14.1294 8.97059 14.1294Z" fill="#127CCA" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5293 15.0294C12.5293 13.6487 13.6486 12.5294 15.0293 12.5294H18.4999C19.8806 12.5294 20.9999 13.6487 20.9999 15.0294V18.5C20.9999 19.8807 19.8806 21 18.4999 21H15.0293C13.6486 21 12.5293 19.8807 12.5293 18.5V15.0294ZM15.0293 14.1294H18.4999C18.9969 14.1294 19.3999 14.5324 19.3999 15.0294V18.5C19.3999 18.9971 18.9969 19.4 18.4999 19.4H15.0293C14.5322 19.4 14.1293 18.9971 14.1293 18.5V15.0294C14.1293 14.5324 14.5322 14.1294 15.0293 14.1294Z" fill="#127CCA" />
          </svg>
        </Button>
        <Button onClick={() => handleChessClick('LIST')}><img src={Spisok} alt="" /></Button>
        <Button onClick={() => handleChessClick('PLAN')}><img src={Planirovka} alt="" /></Button>
      </div>
    </div>
  )
}

export default ObjectFilter
