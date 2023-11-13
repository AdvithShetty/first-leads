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
