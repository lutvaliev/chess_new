import React from 'react'
import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const TotalArea = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="totalArea"
    placeholder="Общая площадь"
    options={[]}
    handleError={(error: any) => error?.totalArea}
  />
)

export default TotalArea
