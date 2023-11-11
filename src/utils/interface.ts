export interface SaveUserResponse {
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
