import { Row } from 'react-table'
import { TObject } from '../BaseApartment/types'

export type TTableCell = {
  value?: string | number | boolean
  row: Row<TObject>
}
