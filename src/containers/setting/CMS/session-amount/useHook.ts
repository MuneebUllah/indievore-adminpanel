import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { SessionAmountDTO } from "utils/helpers/models/sessionAmount.dto"

export const useSessionAmount = () => {

    const getSessionAmount = async (setData: any) => {
        await Apis.getSessionAmount()
            .then((res) => {
                setData(res.data.sessionAmount)
            })
            .catch((error) => console.log(error))
    }

    const getSessionAmountById = async (id: number, setData: any) => {
        await Apis.getSessionAmountById(id)
            .then((res) => {
                setData(res.data.sessionAmount)
            })
            .catch((error) => console.log(error))
    }

    const postSessionAmount = async (body: SessionAmountDTO) => {
        await Apis.postSessionAmount(body)
            .then((res) => {
                console.log(res);
                if (res.data.status) {
                    dispatch(setModalClosed('Session Amount'))
                }
            })
            .catch((error) => { console.log(error) })
    }

    const putSessionAmount = async (id: number, body: SessionAmountDTO) => {
        await Apis.putSessionAmount(id, body)
            .then((res) => {
                console.log(res)
                if (res.statusText === 'OK') {
                    dispatch(setModalClosed('Session Amount'))
                }
            })
            .catch((error) => console.log(error))
    }
    return { getSessionAmount, getSessionAmountById, postSessionAmount, putSessionAmount }
}