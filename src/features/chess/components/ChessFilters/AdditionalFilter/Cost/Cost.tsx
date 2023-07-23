import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const Cost = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="cost"
    placeholder="Стоимость"
    options={[]}
    handleError={(error: any) => error?.cost}
  />
)

export default Cost
