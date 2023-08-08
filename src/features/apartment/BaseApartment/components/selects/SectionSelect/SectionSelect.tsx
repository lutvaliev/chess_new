import { FC, useEffect, useMemo } from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import { TBaseSelectProps } from '../../../types'
import { useSectionQuery } from '../../../querries'
import { useApartmentViewContext } from '../../../../ApartmentView/state/ApartmentViewState'
import styles from '../BuildingSelect/BuildingSelect.module.scss'

function useOptions() {
  const {
    formReturn: {
      watch,
      setValue
    }
  } = useApartmentViewContext()
  const { data } = useSectionQuery('building', watch('building'))
  const { building, view } = watch()
  const defaultOption = view === 'TILE' ? 'ALL_SECTIONS' : data?.[0].id!

  useEffect(() => {
    if (building) {
      setValue('section', defaultOption)
    }
  }, [data, building])

  return useMemo(() => {
    if (!data) {
      return []
    }
    return data.map(({ id, name }: any) => ({ value: id, label: name }))
  }, [data])
}

const SectionSelect: FC<TBaseSelectProps> = ({ control }: any) => {
  const { formReturn: { watch }, objectQuery: { data } } = useApartmentViewContext()
  const options = useOptions()
  const tempOptions = [
    {
      label: 'Все подъезды',
      value: 'ALL_SECTIONS',
      disabledOption: !(watch('view') === 'TILE')
    },
    ...options
  ]

  return (
    <CustomSelectControl
      control={control}
      name="section"
      placeholder="Выбор Подъезда"
      options={tempOptions}
      disabled={!data}
      handleError={(error: any) => error?.section}
      selectClassName={styles.wrapper}
    />
  )
}

export default SectionSelect
