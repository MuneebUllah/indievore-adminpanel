import { ChangeEvent, FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Imgclose from 'assets/images/input-img-close-icon.svg'
import Button from 'components/particles/primary-button'

import { Container } from './style'
import img from 'assets/images/input-img-icon.svg'
import { useForm } from 'react-hook-form'
import { CategoryDTO } from 'utils/helpers/models/categories.dto'
import FormErrorMessage from 'components/particles/forms/form-error-message'

import useCategories from 'containers/categories/useHook'
import { dispatch } from 'store'
import { setModalClosed } from 'store/user-slice'
import { useSelector } from 'react-redux'
import Spinner from 'components/particles/loaders/spinner'

interface AddCategoryModelProps {
    data: any
    categoriesData:any[]
    setCategoriesData:Function
}

const AddCategoryModal: FC<AddCategoryModelProps> = ({ data , categoriesData , setCategoriesData}) => {

    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<CategoryDTO>()
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [status, setStatus] = useState<string>('')
    const { postCategories, putCategoryById } = useCategories()
    const { addCategoriesModalIsOpen , isLoading} = useSelector((state: any) => state.user)
    const { id } = data || {};

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
            borderRadius: '3rem',
        },
    }

    function closeModal() {
        dispatch(setModalClosed('Categories'))
    }

    function closeImg() {
        setSelectedImage(null)
        setValue('image', null)
    }

    useEffect(() => {
        if (data) {
            for (let key in new CategoryDTO()) {
                if (data[key] !== undefined) {
                    if (key as keyof CategoryDTO === ('image')) {
                        setSelectedImage(data[key])
                    }
                    setValue(key as keyof CategoryDTO, data[key])
                    if (key === 'status') {
                        setStatus(data[key])
                    }
                }
            }
        }
    }, [data, setValue])

    const onSubmit = (data: CategoryDTO) => {
        const formData = new FormData()
        for (let key in getValues()) {
            if (key === 'status') {
                formData.append(key, status.toString())
            } else {
                formData.append(key, getValues(key as keyof CategoryDTO))
            }
        }

        if (data?.id) {
            putCategoryById(data?.id , setCategoriesData , categoriesData , data , formData)
        } else {
            postCategories(formData)
        }
        
    }

    const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value
        setStatus(newStatus)
        setValue('status', newStatus)
    }

    return (
        <Modal
            isOpen={addCategoriesModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Category Modal"
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <div className='close-button' onClick={closeModal}>
                    <img src={close} alt="Close" />
                </div>
                <div className='model-container'>
                    <div className='popup-title' style={{ width: '100%', textAlign: "center", marginTop: "4rem" }}>
                        <h1>{!id ? 'Add Category' : 'Edit Category'}</h1>
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
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Category Name'
                                {...register('name', { required: true })}
                            />
                            <FormErrorMessage error={errors.name} />
                        </div>
                        <select
                            id="status"
                            value={status} 
                            onChange={handleStatusChange} 
                            required
                        >
                            <option value="">Status</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    <div className='add-button'>
                        <Button title={isLoading ? <Spinner /> : (!id ? "Add" : 'Edit')} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default AddCategoryModal

