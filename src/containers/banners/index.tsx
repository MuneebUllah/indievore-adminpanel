import { FC, useEffect, useState } from 'react'
import { Container, InnerContainer, Cart } from './style';
import AddBannersPopup from 'components/popus/banners-popup/add-banner';
import Button from 'components/particles/primary-button';
import Swal from 'sweetalert2';

import { useBanners } from './useHook';
import { useSelector } from 'react-redux';
import NoDataFound from 'components/particles/no-data-found';
import { dispatch, RootState } from 'store';
import { setModalOpened } from 'store/user-slice';
import { BannerDTO } from 'utils/helpers/models/banner.dto';

const ManageState: FC = () => {
    const [data, setData] = useState<any[]>([])
    const [dataById, setDataById] = useState<BannerDTO>()
    const { isLoading, addBannerModalIsOpen } = useSelector((state: RootState) => state.user);

    const { getBanners, deleteBanners } = useBanners()

    const addBanners = (data?: BannerDTO) => {
        dispatch(setModalOpened('Banner'))
        if (data?.id) {
            setDataById(data)
        }
    }


    useEffect(() => {
        getBanners(setData)
    }, [])

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--reset-button)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBanners(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <Container>

            <div className='title'>
                <h1>Banner list</h1>
                <Button title="Add Banners" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={() => addBanners()} />

            </div>
            <InnerContainer>
                {
                    data.length > 0 ?
                        data?.map((Banner: BannerDTO, index) => {
                            return (
                                <Cart key={index}>
                                    <div className='banner-img-title'>
                                        <div>
                                            <img src={Banner?.image ? Banner?.image : 'https://picsum.photos/200'} alt="img" />
                                        </div>
                                        <div className='banner-title'>
                                            <span>Banner Name </span>
                                            <h1>{Banner?.heading}</h1>
                                            <span>Banner Content </span>
                                            <p>{Banner?.description}
                                            </p>

                                        </div>
                                    </div>
                                    <div className='banner-right'>
                                        <div className='button'>
                                            <Button title="Edit" width="16rem" fill='true' onclick={() => addBanners(Banner)} />
                                            <Button title="Delete" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={() => handleDelete(Banner?.id)} />
                                        </div>
                                    </div>
                                </Cart>

                            )
                        })

                        :
                        <NoDataFound isShow={!isLoading} />
                }
            </InnerContainer>

            {addBannerModalIsOpen ? <AddBannersPopup data={dataById} setBanners={setData} banners={data} /> : ''}

        </Container>
    )
}


export default ManageState;