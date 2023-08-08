import { Control } from 'react-hook-form'
import { TView } from '../ApartmentView'

export type TBalconies = {
  type?: string,
  square_meters?: number | string
}

export type TObject = {
  Balconies: TBalconies[]
  discounts: {
    promotion_id: string
    extra_charge: false
    discount_id: string
    amount: string
  }
  area: number | string
  area_kitchen?: number
  available?: boolean
  building?: string
  building_id?: string
  cost: number | string
  district?: string
  district_id?: string
  floor: number
  floor_number: number
  id: string
  kitchen_living?: false
  name: string
  number_of_object: number | string
  priceM2: number | string
  rooms: number | string
  section_: string
  section_id?: string
  status?: string
  type_apartment?: number
  type_object?: string
  opacity?: boolean
  prices: {
    cost?: number
    price?: number
    price_type_id: string
  }[]
}

export type TBaseSelectProps = {
  control: Control<any>
}

export type TBaseForm = {
  district: string,
  building: string,
  section: string,
  apartmentLayout: string,
  cost: {
    min: string,
    max: string
  },
  room: string,
  status: string,
  actions: string
  totalArea: {
    min: string,
    max: string
  }
  view: TView
}

export type TDistrict = {
  id: string
  name: string
  description?: string
  available?: boolean
}

export type TBuilding = {
  adress?: string,
  available?: boolean,
  district?: string,
  district_id?: string,
  id: string
  name?: string
  photo?: string
}

export type TSection = {
  available?: boolean
  building?: string
  building_id?: string
  district?: string
  district_id?: string
  id: string
  name: string
  number_of_floors?: number
  number_per_floor?: number
}

export type TObjectParams = {
  id: string
  filter: string
}
