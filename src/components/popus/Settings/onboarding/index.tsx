import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button'
import img from 'assets/images/input-img-icon.svg'
import imgClose from 'assets/images/input-img-close-icon.svg'

import { useForm } from 'react-hook-form'
import { OnBoardingDTO } from 'utils/helpers/models/onBoarding.dto'
import { useOnBoarding } from 'containers/setting/CMS/onboarding/useHook'
import { Container } from './style'
import { dispatch } from 'store'

import { setModalClosed } from 'store/user-slice'
import { useSelector } from 'react-redux'
interface OnBoardingModelProps {
    data:any,
    id:number
}



const OnBoardingPopup: FC<OnBoardingModelProps> = ({ data , id}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const {postOnBoarding , putOnBoarding } = useOnBoarding()
    const { onBoardingModalIsOpen } = useSelector((state:any) => state.user)

    const [fileName, setFileName] = useState('');
    const { register , getValues , setValue , formState:{errors} , handleSubmit} = useForm<OnBoardingDTO>()
    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setFileName(file.name);
            setValue('image', file);
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            width: '68.5rem',
            height: '60rem',
            borderRadius: '3rem'
        },
    };
    function closeModal() {
        dispatch(setModalClosed('OnBoarding Screen'))
    }

    function closeImg() {
        setSelectedImage(null)
        setFileName('')
        setValue('image.name' , '')
    }

    const onSubmit = (data:OnBoardingDTO) => {
        const formData = new FormData()
        for(let key in getValues()){
            formData.append(key , getValues(key as keyof OnBoardingDTO))
        }
        if(id === 0){
            postOnBoarding(formData)   
        }
        else{
            putOnBoarding(id , formData)
        }
    }

    useEffect(()=>{
        if(data){
            for(let key in new OnBoardingDTO){          
                if(data[key] !== undefined){
                    setValue(key as keyof OnBoardingDTO , data[key])
                }
                if(key === 'image'){                   
                    setSelectedImage(data[key])
                }
            }
        }
    },[data])    

    return (
        <Modal
            isOpen={onBoardingModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='close-button' onClick={closeModal}>
                <img src={close} alt="img" />
            </button>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <div className='model-container'>

                    <div className='popup-title' >
                        <h1>{id === 0 ? 'Add Onboarding screen' : 'Edit Onboarding screen'} </h1>
                    </div>
                    <div className='add-ingredient-container'>
                        <div className='image-container'>
                            <div className='image-input-wrapper'>
                                {selectedImage ? (
                                    <>
                                        <img className='uploaded-image' src={selectedImage} alt="Selected" />
                                        <img className='close-icon' src={imgClose} alt="Remove" onClick={closeImg} />
                                    </>
                                ) : (
                                    <>
                                        <label htmlFor="image-input">
                                            <img src={img} alt="Upload" />
                                        </label>
                                        <input
                                            id="image-input"
                                            type="file"
                                            accept="image/*"
                                            className='hidden-input'
                                            {...register('image')}
                                            onChange={handleImageChange}
                                        />
                                    </>
                                )}
                            </div>
                                <div>
                                    <p>{getValues('image.name')}</p>
                                </div>
                        </div>
                        <input type="text" placeholder='Text 1' {...register('text1',{required:true})}/>
                        <input type="text" placeholder='Text 2'{...register('text2',{required:true})}/>
                        <input type="text" placeholder='Text 3' {...register('text3' , {required:true})}/>
                    </div>

                    <div className='add-button'>
                        <Button title={id === 0 ? "Add" : 'Edit'} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default OnBoardingPopup