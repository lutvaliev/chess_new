import React from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const Status = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="status"
    placeholder="Статус"
    options={[]}
    handleError={(error: any) => error?.status}
  />
)

export default Status
