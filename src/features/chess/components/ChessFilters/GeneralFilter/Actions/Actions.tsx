import CustomSelectControl
  from '../../../../../../core/components/CustomSelect/CustomSelectControl/CustomSelectControl'
import styles from './Actions.module.scss'

const Actions = ({ control }: any) => (
  <CustomSelectControl
    control={control}
    name="actions"
    placeholder="Действия"
    options={[]}
    handleError={(error: any) => error?.actions}
    selectClassName={styles.select}
  />
)

export default Actions
