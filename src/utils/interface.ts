export interface UserResponse {
  user: {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  accessToken: string
  refreshToken: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  industry: string
}

export interface Picklists {
  globalStatistics: GlobalStatistics
  geoStatistics: GeoStatistics
  stateStatistics: StateStatistic[]
  leadTypes: LeadType[]
}

export interface GlobalStatistics {
  totalLeads: number
  totalLeadsPerWeek: number
  totalPotentialRevenue: number
}

export interface GeoStatistics {
  totalUniqueStates: number
  totalUniqueCounties: number
}

export interface StateStatistic {
  state: string
  totalLeads: number
  totalLeadsPerWeek: number
  totalPotentialRevenue: number
}

export interface LeadType {
  id: number
  name: string
  description: string
  basicPrice: BasicPrice
  premiumPrice: PremiumPrice
}

export interface BasicPrice {
  id: number
  price: string
}

export interface PremiumPrice {
  id: number
  price: string
}

export interface AreaValues {
  page: number
  rows: number
  total: number
  results: {
    leadTypeId: number
    areaTypeId: number
    areaType: string
    areaValue: string
    state: string
  }[]
}

export interface Cart {
  id: number
  userId: number
  status: string
  dateCreated: string
  items: CartItems[]
}

export interface CartItems {
  id: number
  price: string
  name: string
  areaType: string
  areaValue: string
}
