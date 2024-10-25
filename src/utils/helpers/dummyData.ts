import user from 'assets/images/user-dashboard.svg'
import chefs from 'assets/images/dashboard-chefs.svg'
import retailer from 'assets/images/dashboard-retailer.svg'
import arrowUp from 'assets/images/arrow up.svg'
import arrowDown from 'assets/images/arrow-down.svg'
interface DashboardTopTilesDataProps {
    icon:string,
    name:string,
    value:number,
    percentage:string
    image:string
    color:string
}

export const DashboardTopTilesData:DashboardTopTilesDataProps[] = [
    {
        icon:user,
        name:'Total Users',
        value:5423,
        percentage:'1%',
        image:arrowUp,
        color:'#292D32'
    },
    {
        icon:chefs,
        name:'Total Chefs',
        value:1893,
        percentage:'1%',
        image:arrowDown,
        color:'#FF2121'
    },
    {
        icon:retailer,
        name:'Total Retailers',
        value:189,
        percentage:'2%',
        image:arrowDown,
        color:'#FF2121'
    },
    {
        icon:chefs,
        name:'Over all Traffic ',
        value:1893,
        percentage:'10%',
        image:arrowUp,
        color:'#292D32'
    },
] 

export const tableData = [
    {
        id:1,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Complete',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'Pakistan',
        serving:'2 person',
        duration:'30 m'
    },
    {
        id:2,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Pending',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'India',
        serving:'1 person',
        duration:'50 m'
    },
    {
        id:1,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Declined',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Female',
        location:'Pakistan',
        serving:'2 person',
        duration:'40 m'
    },
    {
        id:2,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Complete',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'Pakistan',
        serving:'3 person',
        duration:'30 m'
    },
    {
        id:1,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Pending',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Female',
        location:'India',
        serving:'4 person',
        duration:'10 m'
    },
    {
        id:2,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Declined',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'Pakistan',
        serving:'3 person',
        duration:'20 m'
    },
    {
        id:1,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Complete',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Female',
        location:'Pakistan',
        serving:'2 person',
        duration:'30 m'
    },
    {
        id:2,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Pending',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'Pakistan',
        serving:'4 person',
        duration:'40 m'
    },
    {
        id:1,
        recipeName:'Red Chiken',
        dateAndTime:'03 May 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Declined',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Female',
        location:'India',
        serving:'3 person',
        duration:'30 m'
    },
    {
        id:2,
        recipeName:'Red Chiken',
        dateAndTime:'03 September 2024',
        placedBy:'User name',
        placedOn:'Mar 4, 2024',
        chefname:'Mark Don',
        sectionType:'Stranded',
        rating:'4.5',
        categories:'Produce',
        price:'$456',
        quentity:'1 kg',
        type:'Categories',
        status:'Complete',
        phone:'+92703292493',
        mail:'admin@builtinsoft.com',
        gender:'Male',
        location:'Pakistan',
        serving:'2 person',
        duration:'20 m'
    },
]

export const ingredientData = [
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
    {
        name:'Ingredient Name',
        image:'https://picsum.photos/200',
        weight:'500g'
    },
]

export const dietaryChoise = [
    {
        heading:'What do you like about Indian food?',
        description:'',
        answer:'Rich and diverse flavors'
    },
    {
        heading:'What do you like about Indian food and what category?',
        description:'',
        answer:'Wide variety of vegetarian options'
    },
    {
        heading:'What do you like about Indian food?',
        description:'',
        answer:'Sweet, spicy, and savory flavors'
    },
    {
        heading:'What do you like about Indian food?',
        description:'',
        answer:'Rich and diverse flavors'
    },
    {
        heading:'Do you follow any of the following diets?',
        description:'',
        answer:'Rich and diverse flavors'
    },
    {
        heading:'Are you looking for any specific ingredient based recipes?',
        description:'',
        answer:'Rich and diverse flavors'
    },
]