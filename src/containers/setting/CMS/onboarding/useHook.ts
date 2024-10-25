import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"

export const useOnBoarding = () => {
    const getOnBoarding = async (setData:any) => {
        await Apis.getOnBoarding()
        .then((res)=>{
            console.log(res)
            setData(res.data.onBoardings)
        })
        .catch((error)=>{console.log(error)})
    }
    const getOnBoardingById = async (id:number , setData:any) => {
        await Apis.getOnBoardingById(id)
        .then((res)=>{
            console.log(res)
            setData(res.data.onBoarding)
        })
        .catch((error)=>{console.log(error)})
    }
    const postOnBoarding = async (body:any) => {
        await Apis.postOnBoarding(body)
        .then((res)=>{
            console.log(res)
            if(res.data.status){
                dispatch(setModalClosed('OnBoarding Screen'))
            }
        })
        .catch((error)=>{console.log(error)})
    }

    const putOnBoarding = async (id:number , body:FormData) => {
        await Apis.putOnBoarding(id , body)
        .then((res) => {
            console.log(res)
            if(res.data.status){
                dispatch(setModalClosed('OnBoarding Screen'))
            }
        })
        .catch((err) => {console.log(err)})
    }
    const uploadOnBoardingImage = async (body:any , setSelectedImage:any) => {
        await Apis.uploadOnBoardingImage(body)
        .then((res)=>{
            console.log(res)
            setSelectedImage(res.data.data)
        })
        .catch((error)=>{console.log(error)})
    }
    return{ getOnBoarding , postOnBoarding , putOnBoarding , uploadOnBoardingImage ,getOnBoardingById}
}