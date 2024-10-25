import { ChangeEvent, FC, useState } from 'react';
import Modal from 'react-modal';
import close from 'assets/images/close.svg';
import Button from 'components/particles/primary-button';
import { RetailerDTO } from 'utils/helpers/models/retailer.dto';
import { useForm } from 'react-hook-form';
import FormErrorMessage from 'components/particles/forms/form-error-message';
import { Container } from './style';
import img from 'assets/images/input-img-icon.svg';
import { useSelector } from 'react-redux';
import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';

interface RetailerModelProps {

}

const RetailerPopup: FC<RetailerModelProps> = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { addRetailerModalIsOpen } = useSelector((state:any) => state.user)
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<RetailerDTO>();

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(URL.createObjectURL(file));

            // Set the file in the form state
            setValue('image', file);
        }
    };

    const onSubmit = (data: RetailerDTO) => {
        console.log('Form Data:', data);
    };

    const closeModal = () => {
        dispatch(setModalClosed('Retailer'))
    };

    const closeImg = () => {
        setSelectedImage(null);
        setValue('image', null);  // Clear the image from the form state
    };

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
            borderRadius: '3rem',
        },
    };

    return (
        <Modal
            isOpen={addRetailerModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add a New Retailer"
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <button className='close-button' onClick={closeModal}>
                    <img src={close} alt="Close" />
                </button>
                <div className='model-container'>
                    <div>
                        <h1>
                            Add a New Retailer
                        </h1>
                    </div>
                    <div className='add-retailer-container'>
                        <div className='image-container'>
                            <div className='image-input-wrapper'>
                                {selectedImage ? (
                                    <>
                                        <img className='uploaded-image' src={selectedImage} alt="Selected" />
                                        <img className='close-icon' src={close} alt="Remove" onClick={closeImg} />
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
                            <p>{getValues('image.name')}</p>
                        </div>
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Name'
                                {...register('name', { required: true })}
                            />
                            <FormErrorMessage error={errors.name} />
                        </div>
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Title (Role in Store)'
                                {...register('title', { required: true })}
                            />
                            <FormErrorMessage error={errors.title} />
                        </div>
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Email Address'
                                {...register('email', { required: true })}
                            />
                            <FormErrorMessage error={errors.email} />
                        </div>
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Website / Social media URL'
                                {...register('Url')}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder='Company Name'
                            style={{ width: '100%' }}
                            {...register('companyName')}
                        />
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Phone'
                                {...register('phone', { required: true })}
                            />
                            <FormErrorMessage error={errors.phone} />
                        </div>
                        <div className='retailer-input'>
                            <input
                                type="text"
                                placeholder='Store Address'
                                style={{ width: '100%' }}
                                {...register('address', { required: true })}
                            />
                            <FormErrorMessage error={errors.address} />
                        </div>
                    </div>

                    <div className='add-button'>
                        <Button title="Add" width='51.2rem' backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    );
};

export default RetailerPopup;
