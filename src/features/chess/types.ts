export type TObject = {
    area?: number
    area_kitchen?: number
    available?: boolean
    building?: string
    building_id?: string
    cost?: number
    district?: string
    district_id?: string
    floor?: number
    floor_number?: number
    id: string
    kitchen_living?: false
    name: string
    number_of_object?: number | string
    priceM2?: number
    rooms?: number
    section_?: string
    section_id?: string
    status?: string
    type_apartment?: number
    type_object?: string
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
    id?: string
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

export type TOptions = TObject | TDistrict | TBuilding | TSection
