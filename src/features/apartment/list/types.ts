import { Row } from 'react-table'
import { TObject } from '../BaseApartment/types'

export type TTableCell = {
  value?: any
  row: Row<TObject>
}
