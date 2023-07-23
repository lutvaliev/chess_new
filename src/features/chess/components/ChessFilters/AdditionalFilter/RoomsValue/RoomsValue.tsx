import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const RoomsValue = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="roomsValue"
    placeholder="Количество комнат"
    options={[]}
    handleError={(error: any) => error?.roomsValue}
  />
)

export default RoomsValue
