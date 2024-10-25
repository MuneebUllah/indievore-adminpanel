import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button'
import { Container } from './style'

import { useForm } from 'react-hook-form'
import FormErrorMessage from 'components/particles/forms/form-error-message'
import { dispatch } from 'store'
import { setModalClosed } from 'store/user-slice'
import { useSelector } from 'react-redux'

import { IngredientDetailDTO } from 'utils/helpers/models/ingredient-detail.dto'
import { useIngredientDetail } from 'containers/Ingredients/ingrident-detail/useHook'


interface IngredientModelProps {
    id: number
    data: any
    ingredientId: number
}


const IngredientDetailPopup: FC<IngredientModelProps> = ({ id, data, ingredientId }) => {
    const [selectedImage, setSelectedImage] = useState<any | null>(null);
    const [dataById , setDatabyId ] = useState<any>()
    const [searchQuery, setSearchQuery] = useState({
        name: '',
        email: '',
        gender: '',
        price: '',
        quantity: ''
    })

    const { handleSubmit, getValues, setValue, register, formState: { errors } } = useForm<IngredientDetailDTO>()
    const { postIngredientDetail, putIngredientDetail } = useIngredientDetail()
    const { addIngredientDetailModalIsOpen } = useSelector((state: any) => state.user)

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
        dispatch(setModalClosed('Ingredient Detail'))
    }
    const handleChange = (field: any, value: any) => {
        setSearchQuery({
            ...searchQuery,
            [field]: value
        });
    };

    function closeImg() {
        setSelectedImage(null)
        // setValue('image', null)
    }

    const onSubmit = (data: IngredientDetailDTO) => {
        if (id === 0) {
            postIngredientDetail(data)
        } else {
            putIngredientDetail(id, data)
        }
    }

    const units = ['Select', 'Bag', 'Bar', 'Block', 'Box', 'Carton', 'Bottle']

    useEffect(() => {      
        const dataById = data[0]?.IngredientsDetails?.find((ingredient: any) => {        
            return ingredient.ingredientId === id;

        })
        setDatabyId(dataById);
    }, [data])

    useEffect(() => {
        if (ingredientId) {
            setValue('ingredientId', ingredientId)
        }

    }, [ingredientId])

    useEffect(() => {
        if(dataById){         
            for(let key in new IngredientDetailDTO()){
                if(dataById[key] !== undefined){
                    setValue(key as keyof IngredientDetailDTO , dataById[key])
                }
                
            }
        }
    } , [dataById])

    return (
        <Modal
            isOpen={addIngredientDetailModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <button className='close-button' onClick={closeModal}>
                    <img src={close} alt="img" />
                </button>
                <div className='model-container'>

                    <div className='popup-title'>
                        <h1 >{id === 0 ? 'Add Ingredient Detail' : 'Edit Ingredient Detail'}</h1>
                    </div>
                    <div className='add-ingredient-container'>
                        <div className='ingredient-image-container'>
                            <img className='ingredient-image' src={data ? data[0]?.image : 'http://picsum.photos/300'} alt="Selected" />
                            <h1>{data[0]?.name}</h1>
                            {selectedImage ? (
                                <>
                                </>
                            ) : (
                                <>
                                    {/* <label htmlFor="image-input">
                                            <img src={img} alt="Upload" />
                                        </label>
                                        <input
                                            id="image-input"
                                            type="file"
                                            accept="image/*"
                                            className='hidden-input'
                                            {...register('image')}
                                            onChange={handleImageChange}
                                        /> */}
                                </>
                            )}
                        </div>
                        <div>
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder='Amount'
                                {...register('price', { required: true })}
                            />
                            <FormErrorMessage error={errors.price} />
                        </div>
                        <div className='quantity'>
                            <div className='quantity-amount'>
                                <input
                                    type="text"
                                    placeholder='Quantity'
                                    {...register('quantity', { required: true })}
                                />
                                <FormErrorMessage error={errors.quantity} />
                            </div>
                            <div className='quantity-unit'>
                                <select id="unit" {...register('unit')} required>
                                    {units.map((item, index) => (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <textarea
                            rows={4}
                            cols={50}
                            placeholder="Description"
                            {...register('description', { required: 'Description is required' })}
                        />
                        {errors.description && <span className="error-message">{errors.description.message}</span>}

                    </div>
                    <div className='add-button'>
                        <Button title={id === 0 ? "Add" : 'Edit'} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default IngredientDetailPopup