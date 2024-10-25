import { Apis } from "libs/apis"

export const useUsers = () => {
    const getUsers =async (setData:any) => {
        await Apis.getUsers()
        .then((res)=>{
            setData(res.data.users)
            console.log(res)})
        .catch((error)=>{console.log(error)})
    }
    return {getUsers}
}