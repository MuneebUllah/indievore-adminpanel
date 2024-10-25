import { Apis } from "libs/apis"

export const useHomeChef = () => {
    const getHomeChef = (setData:any , limit:number) => {
         Apis.getChef()
        .then((res)=>{
            setData(res.data.users)
        })
        .catch((error)=>{console.log(error)})

    }
    return{getHomeChef}
} 