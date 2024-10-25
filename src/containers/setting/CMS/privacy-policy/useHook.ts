import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { PrivacyPolicyDTO } from "utils/helpers/models/privacyPolicy.dto"

export const useprivacyPolicy = () => {
    const getprivacyPolicy = async (setData: any) => {
        await Apis.getprivacyPolicy()
            .then((res) => {
                setData(res.data.policies)
            })
            .catch((err) => { console.log(err) })
    }

    const getprivacyPolicyById = async (id: number, setData: Function) => {
        await Apis.getprivacyPolicyById(id)
            .then((res) => {
                setData(res.data.policy)
            })
            .catch((err) => { console.log(err) })
    }

    const postPrivacyPolicy = async (body: any) => {
        await Apis.postPrivacyPolicy(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Privacy policy'))
                }
            })
            .catch((err) => { console.log(err) })
    }

    const putPrivacyPolicy = async (id: number, body: any) => {
        await Apis.putPrivacyPolicy(id, body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Privacy Policy'))
                }
            })
            .catch((err) => { console.log(err) })
    }

    return { getprivacyPolicy, getprivacyPolicyById, postPrivacyPolicy, putPrivacyPolicy }
}