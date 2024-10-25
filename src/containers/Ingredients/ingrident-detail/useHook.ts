import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { IngredientDetailDTO } from "utils/helpers/models/ingredient-detail.dto"

export const useIngredientDetail = () => {
    const postIngredientDetail =async (body:IngredientDetailDTO) => {
        await  Apis.postIngredientDetail(body)
        .then((res) => {
            if(res.data?.status){
                dispatch(setModalClosed('Ingredient Detail'))
            }
        })
        .catch((err) => console.log(err))
    }

    const putIngredientDetail =async (id:number , body:IngredientDetailDTO) => {
        await Apis.putIngredientDetail(id , body)
        .then((res) => {
            if(res?.data?.status){
                dispatch(setModalClosed('Ingredient Detail'))
            }
        })
        .catch((err) => console.log(err))
    }

    const getIngredientDetail =async (setData:any) => {
        await Apis.getIngredientDetail()
        .then((res) => {
            setData(res.data.data)
        })
        .catch((err) => console.log(err))
    }

    const getIngredientDetailById =async (id:number , setData:any) => {
        await Apis.getIngredientDetailById(id)
        .then((res) => {
            setData(res?.data?.data)
        })
        .catch((err) => console.log(err))
    }

    const deleteIngredientDetail =async (id:number) => {
        await Apis.deleteIngredientDetail(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return { postIngredientDetail , putIngredientDetail , getIngredientDetail , getIngredientDetailById , deleteIngredientDetail}
}