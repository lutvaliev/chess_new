import { FC, useEffect, useMemo } from 'react'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import { useBuildingQuery } from '../../../querries'
import styles from './BuildingSelect.module.scss'

export const useOptions = () => {
  const {
    formReturn: {
      watch,
      setValue
    }
  } = useApartmentViewContext()
  const { data } = useBuildingQuery(watch('district'))
  const { district } = watch()
  useEffect(() => {
    if (district) {
      setValue('building', data?.[0].id!)
      setValue('room', '')
      setValue('cost', { min: '', max: '' })
      setValue('totalArea', { min: '', max: '' })
    }
  }, [data, district])

  return useMemo(() => {
    if (!data) {
      return []
    }
    return data.map(({ id, name }: any) => ({ value: id, label: name }))
  }, [data])
}

const BuildingSelect: FC<TBaseSelectProps> = ({ control }) => {
  const { objectQuery: { data } } = useApartmentViewContext()
  const options = useOptions()
  return (
    <CustomSelectControl
      classname="buildingSelect"
      control={control}
      name="building"
      placeholder="Выбор ГП"
      options={options}
      disabled={!data}
      handleError={(error: any) => error?.building}
      selectClassName={styles.wrapper}
    />
  )
}

export default BuildingSelect
