import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Imgclose from 'assets/images/input-img-close-icon.svg'
import Button from 'components/particles/primary-button'

import { Container } from './style'
import img from 'assets/images/input-img-icon.svg'
import { useForm } from 'react-hook-form'
import FormErrorMessage from 'components/particles/forms/form-error-message'

import { dispatch } from 'store'
import { setModalClosed } from 'store/user-slice'
import { useSelector } from 'react-redux'
import { useIngredient } from 'containers/Ingredients/useHook'
import { IngredientDTO } from 'utils/helpers/models/ingredients.dto'

interface AddCategoryModelProps {
    id: number,
    data: any
}

const AddIngredientModal: FC<AddCategoryModelProps> = ({ id, data }) => {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<IngredientDTO>()
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { postIngredient, putIngredient } = useIngredient()
    const { addIngredientModalIsOpen } = useSelector((state: any) => state.user)

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
        dispatch(setModalClosed('Ingredient'))
    }

    function closeImg() {
        setSelectedImage(null)
        setValue('name', '')
    }

    useEffect(() => {
        if (data) {
            for (let key in new IngredientDTO()) {
                if (data[key] !== undefined) {

                    if (key as keyof IngredientDTO === 'image') {
                        setSelectedImage(data[key])
                    }
                    setValue(key as keyof IngredientDTO, data[key])
                }
            }
        }
    }, [data])

    const onSubmit = (data: IngredientDTO) => {
        const formData = new FormData()
        for (let key in getValues()) {
            if (key as keyof IngredientDTO === 'status') {
                const status: any = getValues('status') == 'Active';
                formData.append(key, status);
            }
            else {
                formData.append(key, getValues(key as keyof IngredientDTO))
            }
        }

        if (id === 0) {
            postIngredient(formData)
        }
        else {
            putIngredient(id, formData)
        }
    }

    return (
        <Modal
            isOpen={addIngredientModalIsOpen}
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
                        <h1 >{id === 0 ? 'Add Ingredients' : 'Edit Ingredients'}</h1>
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
                                placeholder='Ingredient Name'
                                {...register('name', { required: true })}
                            />
                            <FormErrorMessage error={errors.name} />
                        </div>
                        <select id="Status" {...register('status')} value={getValues('status') ? 'Active' : 'Inactive'} required>
                            <option>status</option>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
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

export default AddIngredientModal