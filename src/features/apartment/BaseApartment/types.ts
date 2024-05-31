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
  secondestate: boolean
  color: any,
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
  object_planes: any
}

export type TBaseSelectProps = {
  control: Control<any>,
}

export type TBaseForm = {
  district: string,
  building: string,
  section: string,
  layouts: string,
  apartments: any,
  apartmentLayout: string,
  cost: {
    min: string,
    max: string
  },
  room: string | number,
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

export type TLayouts = {
  value: string,
  label: string,
  count_aparts: number,
  parameters: {
    Axis: string,
    VendorCode: string,
    PlanoplanLink: string,
    LayoutCode: string,
    Levels: number,
    Risers: number,
    CountRooms: number,
    EnsuiteBathroom: boolean,
    AreaKitchen: number,
    AreaCorridor: number,
    TotalAreaReceived: number,
    AreaBathroom: number,
    AreaLiving: number,
    AreaHallway: number,
    AreaWardrobe: number,
    AreaBathroom2: number,
    AreaBathroom1: number,
    AreaRoom5: number,
    AreaRoom4: number,
    AreaRoom3: number,
    AreaRoom2: number,
    AreaRoom1: number,
    AreaLivingRoom: number,
    AreaBathroom3: number,
    TotalProjectArea: number,
    Description: string,
    MinimalPrice: number,
    MaximalPrice: number,
    Loggia: number,
    Glaze: number,
    BalconyArea: number,
    BalconyType: string,
    French: number
  },
  img_adress: string
}

export type TApartments = {
  Apart: {
    id: string,
    ApartName: string,
    Description: string
  }
}

export type TObjectParams = {
  id: string
  filter: string
}
