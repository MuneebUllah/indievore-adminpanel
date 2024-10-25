export class RetailerDTO{
    name : string = ''
    title : string = ''
    email : string = ''
    companyName : string = ''
    Url : string = ''
    phone : string = ''
    address : string = ''
    image : any
}

export class RetailerListSearchDTO{
    nameOrEmail : string = ''
    phoneNumber : string = ''
    companyName : string = ''
    status : string = '' 
}

export class RetailerViewSearchDTO{
    name : string = '' 
    id : string = ''
    date : string = ''
}