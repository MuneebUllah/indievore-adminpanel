import { Apis } from "libs/apis"
import { dispatch } from "store"
import { setModalClosed } from "store/user-slice"
import { BannerDTO } from "utils/helpers/models/banner.dto"

export const useBanners = () => {
    const postBanner = async (body: FormData) => {
        await Apis.postBanner(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Banner'))
                }
            })
            .catch((error) => { console.log(error) })
    }
    const getBanners = async (setData: any) => {
        await Apis.getBanner()
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => { console.log(error) })

    }
    const getBannerById = async (id: number, setData: any) => {
        await Apis.getBannerById(id)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => { console.log(error) })

    }

    const putBanner = async (id: number, body: FormData, banners: any[], setBanners: Function, banner: BannerDTO) => {
        await Apis.putBanner(id, body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Banner'))
                    const index = banners.findIndex(b => b.id === id);
                    banners[index] = banner;
                    setBanners([...banners]);
                }
            })
            .catch((err) => { console.log(err) })
    }

    const deleteBanners = async (id: number) => {
        await Apis.deleteBanner(id)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => { console.log(error) })

    }
    const uploadBannerImage = async (body: any) => {
        await Apis.uploadBannerImage(body)
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
    }
    return { postBanner, getBanners, getBannerById, deleteBanners, putBanner, uploadBannerImage }
}