export class UserDTO {
    id !: number
    name : string = ''
    email: string = ""
    countryCode !: number 
    country : string = ''
    mobileNumber: number = 0
    image: any
    isVerified !: boolean
    otp !: number
    status !: boolean
    companyName !: string
    state: string = ''
    city: string = ''
    gender: string = ''
    location!: string
}