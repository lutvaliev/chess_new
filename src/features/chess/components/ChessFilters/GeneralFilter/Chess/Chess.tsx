import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'

const Chess = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="chess"
    placeholder="Выбор ГП"
    options={[]}
    handleError={(error: any) => error?.chess}
  />
)

export default Chess
