export class IngredientDTO {
    image : any;
    name: string = '';
    description !: string;
    status !: any
    id !:number
}

export class IngredientSearchDTO{
    name:string = ''
    dietaries:string = ''
    categories : string = ''
    status : string = ''
}