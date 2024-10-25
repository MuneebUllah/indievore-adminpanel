import { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import close from 'assets/images/close.svg';
import Button from 'components/particles/primary-button';
import img from 'assets/images/input-img-icon.svg';

import closeImage from 'assets/images/input-img-close-icon.svg';
import { Container } from './style';
import { useForm } from 'react-hook-form';
import { BannerDTO } from 'utils/helpers/models/banner.dto';
import FormErrorMessage from 'components/particles/forms/form-error-message';
import { useBanners } from 'containers/banners/useHook';

import { dispatch, RootState } from 'store';
import { setModalClosed } from 'store/user-slice';
import { useSelector } from 'react-redux';
import Spinner from 'components/particles/loaders/spinner';

interface AddBannersModelProps {
    data:any
    setBanners: Function;
    banners: any[]

}

const AddBannersPopup: FC<AddBannersModelProps> = ({ data , setBanners, banners}) => {
    const { handleSubmit, setValue, register, formState: { errors } , getValues} = useForm<BannerDTO>();
    const [selectedImage, setSelectedImage] = useState<any>(null); // Store the file itself
    const { addBannerModalIsOpen } = useSelector((state:any) => state.user)
    const { postBanner ,putBanner} = useBanners();
    const { isLoading } = useSelector((state:RootState) => state.user)

    const handleImageChange = (e:any) => {
        setSelectedImage(URL?.createObjectURL(e.target.files[0]));
        setValue('image' , e.target.files[0])
      
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
            borderRadius: '3rem'
        },
    };

    function closeModal() {
        dispatch(setModalClosed('Banner'))
    }

    function closeImg() {
        setSelectedImage(null);
    }

    useEffect(()=>{
        if(data){
            for(let key in new BannerDTO()){
                if(data[key] !== undefined){
                    if(key as keyof BannerDTO === 'image'){                       
                        setSelectedImage(data[key])                        
                    }
                    setValue(key as keyof BannerDTO , data[key])
                    
                }
            }
            
        }
    },[data])
    
    const onSubmit = (data: BannerDTO) => {
        const formData = new FormData()
        for(let key in getValues()){
            formData.append(key , getValues (key as keyof BannerDTO))
        }
        if(data?.id){
            putBanner(data?.id , formData , banners , setBanners, data )
        }
        else{
            postBanner(formData);            
        }
    };    

    return (
        <Modal
            isOpen={addBannerModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Banner Modal"
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <button className='close-button' onClick={closeModal}>
                    <img src={close} alt="Close" />
                </button>
                <div className='model-container'>
                    <div className='popup-title'>
                        <h2>{data?.id ? 'Edit Banner' : 'Add Banner'}</h2>
                    </div>
                    <div className='add-ingredient-container'>
                        <div className='image-container'>
                            <div className='image-input-wrapper'>
                                {selectedImage ? (
                                    <>
                                        <img className='uploaded-image' src={ selectedImage} alt="Selected" />
                                        <img className='close-icon' src={closeImage} alt="Remove" onClick={closeImg} />
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
                                            onChange={handleImageChange}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Banner Heading'
                                {...register('heading', { required: true })}
                            />
                            <FormErrorMessage error={errors.heading} />
                        </div>
                        <input
                            type="text"
                            placeholder='Banner Description'
                            {...register('description')}
                        />
                    </div>

                    <div className='add-button'>
                        <Button title={isLoading ? <Spinner /> : (data?.id ? "Edit" : 'Add')} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    );
};

export default AddBannersPopup;
