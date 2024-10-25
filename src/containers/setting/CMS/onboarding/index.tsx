import { useEffect, useState } from 'react'
import { AllManageStateContainer, Cart, Container } from './style'
import OnBoardingPopup from 'components/popus/Settings/onboarding'
import Button from 'components/particles/primary-button'
import { useOnBoarding } from './useHook'
import { dispatch, RootState } from 'store'
import { setModalOpened } from 'store/user-slice'
import { useSelector } from 'react-redux'

export default function OnBoarding() {
    const [data, setData] = useState<any[]>([])
    const [dataById, setDataById] = useState<any>(null)
    const [id, setId] = useState<number>(0)
    const { onBoardingModalIsOpen } = useSelector((state: RootState) => state.user)
    const { getOnBoarding, getOnBoardingById } = useOnBoarding()

    useEffect(() => {
        getOnBoarding(setData)
    }, [onBoardingModalIsOpen])

    const handleChangeOnboarding = (id: number) => {
        dispatch(setModalOpened('OnBoarding Screen'))
        setId(id)
        if (id) {
            getOnBoardingById(id, setDataById)
        }
    }

    return (
        <Container>
            <div className='title'>
                <h1>Onboarding Screen</h1>
                {
                    data?.length >= 3 ? '' :
                        <Button title="Add  Onboarding Screen" onclick={() => handleChangeOnboarding(0)} width="22rem" fill='true' />
                }

            </div>

            <AllManageStateContainer>
                {
                    data.map((onboarding, index) => {
                        return (
                            <Cart>
                                <div className='banner-img-title'>
                                    <div>
                                        <img src={onboarding?.image ? onboarding?.image : 'https://picsum.photos/200'} alt="img" />
                                    </div>
                                    <div className='banner-title'>
                                        <span>Text 1 </span>
                                        <h1>{onboarding?.text1}</h1>
                                        <span>Text 2  </span>
                                        <h1>{onboarding?.text2}</h1>
                                        <span>Text 3  </span>
                                        <h1>{onboarding?.text3}</h1>
                                    </div>
                                </div>
                                <Button title="Edit" width="11.2rem" fill='true' onclick={() => handleChangeOnboarding(onboarding?.id)} backgroundcolor='var(--medium-black)' />
                            </Cart>
                        )
                    })
                }

            </AllManageStateContainer>
            {onBoardingModalIsOpen ? <OnBoardingPopup data={dataById} id={id} /> : ''}
        </Container>
    )
}
