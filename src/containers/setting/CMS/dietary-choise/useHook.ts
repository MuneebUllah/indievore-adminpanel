import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { DietaryChoiceDTO } from "utils/helpers/models/dietaryChoice.dto"

export const useDietaryChoice = () =>{
    const PostDietaryChoice = async( body:DietaryChoiceDTO) => {
        await Apis.postQuestions(body)
        .then((res)=>{
            if(res?.data?.status){
                dispatch(setModalClosed('Dietary Choice'))
            }
        })
    }
    const getDietaryChoice = async(setData:any) => {
        await Apis.getQuestions()
        .then((res)=>{
            setData(res?.data?.questions)
        })
        .catch((error)=>{console.log(error)})
        // .finally(()=>{})
    }

    const getDietaryChoiceById = async (id:number , setData:any) => {
        await Apis.getQuestionById(id)
        .then((res) => {
            setData(res?.data?.question)            
        })
        .catch((err) => console.log(err))
    }

    const putDietaryChoice =async (id:number , body:DietaryChoiceDTO) => {
        await Apis.putQuestion(id , body)
        .then((res) => {
            if(res.status){
                dispatch(setModalClosed('Dietary Choice'))
            }         
        })
        .catch((err) => console.log(err))
    }

    return { PostDietaryChoice , getDietaryChoice , getDietaryChoiceById , putDietaryChoice}
}