import { useState } from 'react'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useApartmentViewContext } from '../../../ApartmentView/state/ApartmentViewState'
import StatusSelect from '../selects/StatusSelect/StatusSelect'
import RoomSelect from '../selects/RoomSelect/RoomSelect'
import TotalAreaBar from '../bar/TotalAreaBar/TotalAreaBar'
import CostBar from '../bar/CostBar/CostBar'
import FloorBar from '../bar/FloorBar/FloorBar'
import styles from './ApartmentFilter.module.scss'
import { getPlanPrefix } from '../../utils/getPlanPrefix'
import CustomSelectControl from '../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import ControlledChip from '../ControlledChip/ControlledChip'

const ApartmentFilter = ({ name }: any) => {
  const {
    formReturn: { control, watch, setValue },
    filteredData,
    layoutFilterData
  } = useApartmentViewContext()

  const [resetFlag, setResetFlag] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const resetRange = () => {
    setValue('advantages', [])
    setValue('feature', [])
    setValue('furnish', [])
    setValue('layoutType', 'any')
    setValue('windowView', 'any')
    setResetFlag(!resetFlag)
  }

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  const sortOptions = [
    { label: 'Дешевле', value: 'priceAsc' },
    { label: 'Дороже', value: 'priceDesc' },
    { label: 'С большей площадью', value: 'areaDesc' },
    { label: 'С меньшей площадью', value: 'areaAsc' }
  ]

  const planCount = watch('view') === 'PLAN'
    ? layoutFilterData.length
    : filteredData.filter((item) => !item.opacity).length

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.selects}>
          {/* <StatusSelect control={control}/> */}
          <RoomSelect
            name={name}
            resetFilters={resetRange}
            resetFlag={resetFlag}
            setResetFlag={setResetFlag}
          />
          {/* <button type="button" className={styles.button}>Без ВП</button> */}
        </div>
        <div className={styles.metrics}>
          <div className={styles.bar}>
            <div className={styles.text}>Площадь:</div>
            <TotalAreaBar control={control} resetFilters={resetRange} resetFlag={resetFlag} />
          </div>
          <div className={styles.bar}>
            <div className={styles.text}>Стоимость:</div>
            <CostBar control={control} resetFilters={resetRange} resetFlag={resetFlag} />
          </div>
          <div className={styles.bar}>
            <div className={styles.text}>Этаж:</div>
            <FloorBar control={control} resetFilters={resetRange} resetFlag={resetFlag} />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.resetBtn} onClick={resetRange} id="reset_btn">
            Сбросить фильры
            <span role="presentation">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                user-select="none"
                focusable="false"
              >
                <rect
                  x="4.3"
                  y="4.3"
                  width="16.4"
                  height="16.4"
                  rx="8.2"
                  stroke="#127CCA"
                  strokeWidth="1.6"
                />
                <path
                  d="M9.37289 8.30777C9.05884 7.99631 8.54967 7.99631 8.23562 8.30777C7.92157 8.61924 7.92157 9.12422 8.23562 9.43568L11.3253 12.5L8.23554 15.5643C7.92149 15.8758 7.92149 16.3808 8.23554 16.6922C8.54958 17.0037 9.05876 17.0037 9.37281 16.6922L12.4626 13.6279L15.6272 16.7664C15.9412 17.0779 16.4504 17.0779 16.7645 16.7664C17.0785 16.4549 17.0785 15.95 16.7645 15.6385L13.5999 12.5L16.7644 9.3615C17.0784 9.05004 17.0784 8.54506 16.7644 8.2336C16.4503 7.92213 15.9412 7.92213 15.6271 8.2336L12.4626 11.3721L9.37289 8.30777Z"
                  fill="#127CCA"
                />
              </svg>
            </span>
          </button>
          <button type="button" className={styles.filterBtn} onClick={handleOpen}>
            <span role="presentation">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                user-select="none"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 11.5C11.1569 11.5 12.5 10.1569 12.5 8.5C12.5 6.84315 11.1569 5.5 9.5 5.5C8.12019 5.5 6.95794 6.43153 6.60785 7.7H4.3C3.85817 7.7 3.5 8.05817 3.5 8.5C3.5 8.94183 3.85817 9.3 4.3 9.3H6.60785C6.95794 10.5685 8.12019 11.5 9.5 11.5ZM9.5 9.9C10.2732 9.9 10.9 9.2732 10.9 8.5C10.9 7.7268 10.2732 7.1 9.5 7.1C8.7268 7.1 8.1 7.7268 8.1 8.5C8.1 9.2732 8.7268 9.9 9.5 9.9Z"
                  fill="#127CCA"
                />
                <path
                  d="M12.3922 9.3C12.4625 9.04531 12.5 8.77704 12.5 8.5C12.5 8.22296 12.4625 7.95469 12.3922 7.7H20.7C21.1418 7.7 21.5 8.05817 21.5 8.5C21.5 8.94183 21.1418 9.3 20.7 9.3H12.3922Z"
                  fill="#127CCA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5 19.5C13.8431 19.5 12.5 18.1569 12.5 16.5C12.5 14.8431 13.8431 13.5 15.5 13.5C16.8798 13.5 18.0421 14.4315 18.3922 15.7H20.7C21.1418 15.7 21.5 16.0582 21.5 16.5C21.5 16.9418 21.1418 17.3 20.7 17.3H18.3922C18.0421 18.5685 16.8798 19.5 15.5 19.5ZM15.5 17.9C14.7268 17.9 14.1 17.2732 14.1 16.5C14.1 15.7268 14.7268 15.1 15.5 15.1C16.2732 15.1 16.9 15.7268 16.9 16.5C16.9 17.2732 16.2732 17.9 15.5 17.9Z"
                  fill="#127CCA"
                />
                <path
                  d="M12.6078 17.3C12.5375 17.0453 12.5 16.777 12.5 16.5C12.5 16.223 12.5375 15.9547 12.6078 15.7H4.3C3.85817 15.7 3.5 16.0582 3.5 16.5C3.5 16.9418 3.85817 17.3 4.3 17.3H12.6078Z"
                  fill="#127CCA"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        {(watch('view') === 'LIST' || watch('view') === 'PLAN') && (
          <div className={styles.icon}>
            <SwapVertIcon style={{ marginRight: 8 }} />
            <CustomSelectControl
              control={control}
              name="sorting"
              placeholder="Сортировка"
              options={sortOptions}
              handleError={(error: any) => error?.actions}
              selectClassName={styles.sort_select}
            />
          </div>
        )}
        <div className={styles.count}>
          {`Найдено ${planCount} планиров${getPlanPrefix(planCount)}:`}
        </div>
      </div>
      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'grey.500'
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" gutterBottom textAlign="center">
            Фильтры
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Преимущества</Typography>
            <ControlledChip
              control={control}
              name="advantages"
              value="discount"
              label="Скидка 25%"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Особенности</Typography>
            <ControlledChip control={control} name="feature" value="apartments" label="Квартиры" />
            <ControlledChip
              control={control}
              name="feature"
              value="withBalcony"
              label="С балконом"
            />
            <ControlledChip control={control} name="feature" value="euro" label="Евро" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Отделка</Typography>
            <ControlledChip
              control={control}
              name="furnish"
              value="improvedFurnish"
              label="Улучшенная отделка"
            />
            <ControlledChip
              control={control}
              name="furnish"
              value="withFurnish"
              label="С отделкой"
            />
            <ControlledChip
              control={control}
              name="furnish"
              value="withoutFurnish"
              label="Без отделки"
            />
          </Box>
          <Typography variant="body1">Тип планировки</Typography>
          <CustomSelectControl
            sx={{ mb: 2 }}
            control={control}
            name="layoutType"
            options={[
              { label: 'Любой', value: 'any' },
              { label: 'Тип 1', value: 'type1' },
              { label: 'Тип 2', value: 'type2' }
            ]}
            handleError={(error: any) => error?.actions}
            selectClassName={styles.filter_select}
          />
          <Typography variant="body1">Вид из окна</Typography>
          <CustomSelectControl
            sx={{ mb: 2 }}
            control={control}
            name="windowView"
            options={[
              { label: 'Любой', value: 'any' },
              { label: 'На город', value: 'city' },
              { label: 'На парк', value: 'park' }
            ]}
            handleError={(error: any) => error?.actions}
            selectClassName={styles.filter_select}
          />
          <Box>
            <div className={styles.count}>
              {`Найдено ${planCount} планиров${getPlanPrefix(planCount)}`}
            </div>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={resetRange}>
              Сбросить
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Показать
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ApartmentFilter
