import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const ApartmentLayout = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="apartmentLayout"
    placeholder="Планировка"
    options={[]}
    handleError={(error: any) => error?.apartmentLayout}
  />
)

export default ApartmentLayout
