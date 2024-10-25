export class CategoryDTO{
    id!:number;
    image:any;
    name:string = '';
    status : any;
    ingredientsCount :number = 0
}

export class LinkedCategoryIngredientsDTO{
    id !: number;
    image : any;
    name: string = ''
    status : any
}

export class categoriesSearchDTO {
    categoryName :string =''
    status : string = '--'
}