import { Apis } from "libs/apis"
import { dispatch } from "store";
import { setModalClosed } from "store/user-slice";
import { TermConditionsDTO } from "utils/helpers/models/term&Conditions.dto";

export const useTermAndConditions = () => {
    const getTermAndConditions  =async (setData:any) => {
        await Apis.getTermAndConditions()
        .then((res) => {
            setData(res.data.data)            
        })
        .catch((err) => {console.log(err)})
    }

    const getTermAndConditionsById =async (id:number , setData:any) => {
        await Apis.getTermAndConditionById(id)
        .then((res) => {
            setData(res.data.data)          
        })
        .catch((err) => {console.log(err)})

    }

    const postTermAndCondition =async (body:TermConditionsDTO) => {
        await Apis.postTermAndConditions(body)
        .then((res) => {
            if(res.data.status){
                dispatch(setModalClosed('Term And Condition'))
            }           
        })
        .catch((err) => {console.log(err)})
    }

    const putTermAndCondition =async (id:number , body:any) => {
        await Apis.putTermAndCondition(id , body)
        .then((res) => {
            if(res.data.status){
                dispatch(setModalClosed('Term And Condition'))
            }           
        })
        .catch((err) => {console.log(err)})
    }
     return{getTermAndConditions , getTermAndConditionsById , postTermAndCondition , putTermAndCondition}
}