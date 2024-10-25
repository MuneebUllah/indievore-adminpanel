import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { FaqDTO } from "utils/helpers/models/faq.dto"

export const useFaqs = () =>{
    const getFaqs = async (setData:any) => {
        await Apis.getFaqs()
        .then((res)=>{
            setData(res.data.faqs)
        })
        .catch((err)=>{console.log(err)})
    }
    const postFaqs = async (body:any) => {
        await Apis.postFaqs(body)
        .then((res)=>{
            if(res.data.status){
                dispatch(setModalClosed('Faq'))
            }
        })
        .catch((err)=> {console.log(err)})
    }
    const putFaqs = async (id:number , body:any) => {
        await Apis.putFaqs(id , body)
        .then((res)=>{
            if(res.data.status){
                dispatch(setModalClosed('Faq'))
            }
        })
        .catch((err)=> {console.log(err)})
    }
    const getFaqsById = async (id:number | null , setData:any) => {
        await Apis.getFaqsById(id)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {console.log(err)})
    }
    return{ getFaqs , postFaqs , getFaqsById , putFaqs}
}