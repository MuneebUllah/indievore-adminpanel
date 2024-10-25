import { ChangeEvent, FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Imgclose from 'assets/images/input-img-close-icon.svg'
import Button from 'components/particles/primary-button'

import { Container } from './style'
import img from 'assets/images/input-img-icon.svg'
import { useForm } from 'react-hook-form'
import FormErrorMessage from 'components/particles/forms/form-error-message'
import useCategories from 'containers/categories/useHook'

import { dispatch } from 'store'
import { setModalClosed } from 'store/user-slice'
import { useSelector } from 'react-redux'
import { DietariesDTO } from 'utils/helpers/models/dietaries.dto'

interface AddCategoryModelProps {
    id: number
    data: any
    dietariesData:any[]
    setDietariesData:Function
}

const AddDietariesModal: FC<AddCategoryModelProps> = ({ id, data , dietariesData , setDietariesData}) => {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<DietariesDTO>()
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { postDietaries, putDietaries } = useCategories()
    const { addDietariesModalIsOpen } = useSelector((state: any) => state.user)
    const [status , setStatus] = useState<boolean>(false)

    const handleImageChange = (event: any) => {
        setSelectedImage(URL.createObjectURL(event?.target?.files[0]))
        setValue('image', event.target.files[0])

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
        dispatch(setModalClosed('Dietaries'))
    }

    function closeImg() {
        setSelectedImage(null)
        setValue('name', '')
    }

    useEffect(() => {
        if (data) {
            for (let key in new DietariesDTO()) {
                if (data[key] !== undefined) {
                    if (key as keyof DietariesDTO === 'image') {
                        setSelectedImage(data[key])
                    }
                    if(key === 'status'){
                        setStatus(data[key])
                    }
                    setValue(key as keyof DietariesDTO, data[key])
                }
            }
        }
    }, [data])

    const onSubmit = (data: DietariesDTO) => {
        const formData = new FormData()
        for (let key in getValues()) {
            if (key as keyof DietariesDTO === 'status') {
                const status: any = getValues('status') == 'Active';
                formData.append(key, status);
            }
            else {
                formData.append(key, getValues(key as keyof DietariesDTO))
            }
        }

        if (id === 0) {
            postDietaries(formData)
        }
        else {
            putDietaries(id, formData , dietariesData , setDietariesData , data)
        }
    }

    const handleStatusChange = (e:ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value === 'Active'
        setStatus(newStatus)
        setValue('status' , newStatus)
     }

    return (
        <Modal
            isOpen={addDietariesModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <div className='close-button' onClick={closeModal}>
                    <img src={close} alt="img" />
                </div>
                <div className='model-container'>
                    <div className='popup-title' style={{ width: '100%', textAlign: "center", marginTop: "4rem" }}>
                        <h1 >{id === 0 ? 'Add Dietaries' : 'Edit Dietaries'}</h1>
                    </div>
                    <div className='add-ingredient-container'>
                        <div className='image-container'>
                            <div className='image-input-wrapper'>
                                {selectedImage ? (
                                    <>
                                        <img className='uploaded-image' src={selectedImage} alt="Selected" />
                                        <img className='close-icon' src={Imgclose} alt="Remove" onClick={closeImg} />
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
                            {/* <input type="text" placeholder="Your input here" style={{ flex: 1, border: 'none', backgroundColor: 'transparent', outline: 'none' }} /> */}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Dietaries Name'
                                {...register('name', { required: true })}
                            />
                            <FormErrorMessage error={errors.name} />
                        </div>
                        <select 
                        id="Status" 
                        {...register('status')} 
                        value={status ? 'Active' : 'Inactive'} 
                        onChange={handleStatusChange}
                        required>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div className='add-button'>
                        <Button title={id === 0 ? "Add" : 'Edit'} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default AddDietariesModal