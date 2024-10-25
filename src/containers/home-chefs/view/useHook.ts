import { Apis } from "libs/apis"

export const useHomeChefById = () =>{

    const getHomeChefById  = async (id:string , setData:Function , offset:number , limit:number) =>{
        await Apis.getChefById(id , offset , limit)
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((error)=>{console.log(error)})
    }
return { getHomeChefById }
}