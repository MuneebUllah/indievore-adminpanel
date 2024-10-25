import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { IngredientSearchDTO } from "utils/helpers/models/ingredients.dto"

export const useIngredient = () => {
    const getIngredients = async (setData: any) => {
        await Apis.getIngredients()
            .then((res) => {
                setData(res.data.ingredients)
            })
            .catch((error) => { console.log(error) })
    }

    const getIngredientById = async (id: number | null, setData: any) => {
        await Apis.getIngredientById(id)
            .then((res) => {
                setData(res.data.ingredient)
            })
            .catch((error) => { console.log(error) })
    }

    const postIngredient = async (body: any) => {
        await Apis.postIngredient(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Ingredient'))
                }
            })
            .catch((error) => { console.log(error) })
    }
    const putIngredient = async (id: number, body: any) => {
        await Apis.putIngredient(id, body)
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
    }

    const deleteIngredient = async (id: number) => {
        await Apis.deleteIngredient(id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const searchIngredients = (data: IngredientSearchDTO) => {
        Apis.searchIngredients(data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    return { getIngredients, postIngredient, getIngredientById, putIngredient, deleteIngredient, searchIngredients }
}