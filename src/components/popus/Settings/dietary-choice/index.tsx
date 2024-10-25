import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button'
import { Container } from './style'
import deleteIcon from 'assets/images/delete.svg'

import { useForm } from 'react-hook-form'
import { DietaryChoiceDTO } from 'utils/helpers/models/dietaryChoice.dto'
import { useDietaryChoice } from 'containers/setting/CMS/dietary-choise/useHook'
import FormErrorMessage from 'components/particles/forms/form-error-message'
import { setModalClosed } from 'store/user-slice'

import { useSelector } from 'react-redux'
import { dispatch } from 'store'

interface DietaryChoiceModelProps {
    id: number
    data: any
}


const DietaryChoicePopup: FC<DietaryChoiceModelProps> = ({ id, data }) => {
    const [formData, setFormData] = useState<DietaryChoiceDTO>(new DietaryChoiceDTO());
    const { handleSubmit, register, setValue, formState: { errors } } = useForm<DietaryChoiceDTO>({ defaultValues: new DietaryChoiceDTO() });
    const { dietaryChoiceModalIsOpen } = useSelector((state: any) => state.user)
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
            height: '61vh',
            borderRadius: '3rem',
        },
    };
    const { PostDietaryChoice, putDietaryChoice } = useDietaryChoice()
    function closeModal() {
        dispatch(setModalClosed('Dietary Choice'))
    }

    useEffect(() => {
        if (data && id !== 0) {
            for (let key in new DietaryChoiceDTO()) {
                if (data[key] !== undefined) {
                    formData.options.push('')
                    setValue(key as keyof DietaryChoiceDTO, data[key])
                    setFormData({ ...formData })
                }
            }
        }

    }, [data, id])

    const handleAdd = () => {
        formData.options.push('');
        setValue('options', formData.options);
        setFormData({ ...formData });
    }

    const handleRemove = (index: number) => {
        formData.options.splice(index, 1);
        setValue('options', formData.options);
        setFormData({ ...formData });
    }

    const onSubmit = (data: DietaryChoiceDTO) => {
        if (id) {
            putDietaryChoice(id, data)
        }
        else {
            PostDietaryChoice(data)
        }
    }


    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setValue(name, value);
        setFormData({ ...formData, [name]: value });
    }

    const handleOptionsChange = (event: any, index: number) => {
        const { name, value } = event.target;
        setValue(name, value);
        formData.options[index] = value;
        setFormData({ ...formData });
    }

    return (
        <Modal
            isOpen={dietaryChoiceModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"

        >
            <button className='close-button' onClick={closeModal}>
                <img src={close} alt="img" />
            </button>
            <Container className='p-custom-scrollbar-8 custom-scrollbar' onSubmit={handleSubmit(onSubmit)}>
                <div className='popup-title'>
                    <h1>Dietary Choice</h1>
                </div>
                <div className='add-ingredient-container '>
                    <div>
                        <input
                            type="text"
                            placeholder='Question'
                            {...register("question", {
                                required: true,
                            })}
                            onChange={handleChange}
                        />
                        <FormErrorMessage error={errors.question} />
                    </div>
                    <input type='text' placeholder='Description' />
                    {formData.options.map((field: string, index: number) => (
                        <div key={index} className="input-container">
                            <input
                                type="text"
                                placeholder={`Answer ${index + 1}`}
                                className="input-field"
                                {...register(`options.${index}`,
                                    { required: true }
                                )}
                                onChange={e => handleOptionsChange(e, index)}
                            />
                            {
                                index === 0 ?
                                    <Button title="+Add" width="11rem" backgroundcolor='var(--reset-button)' fill='true' onclick={handleAdd} /> :
                                    <div className='delete-container' onClick={() => handleRemove(index)}>
                                        <img src={deleteIcon} alt="img" />
                                    </div>


                            }
                        </div>
                    ))}
                </div>

                <div className='add-button'>
                    <Button title={id === 0 ? "Add" : 'Edit'} width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
                </div>
            </Container>
        </Modal>
    )
}

export default DietaryChoicePopup