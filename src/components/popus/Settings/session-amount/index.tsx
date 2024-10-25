import { FC, useEffect } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button'
import { Container } from './style'
import { useSelector } from 'react-redux'
import { dispatch } from 'store'
import { setModalClosed } from 'store/user-slice'
import { useForm } from 'react-hook-form'
import { SessionAmountDTO } from 'utils/helpers/models/sessionAmount.dto'
import { useSessionAmount } from 'containers/setting/CMS/session-amount/useHook'
interface AddSessionAmountModelProps {
    data: any
    id: number

}


const AddSessionAmountPopup: FC<AddSessionAmountModelProps> = ({ data, id }) => {
    const { register, handleSubmit , setValue} = useForm<SessionAmountDTO>()
    const { postSessionAmount, putSessionAmount } = useSessionAmount()
    const { sessionAmountModalIsOpen } = useSelector((state: any) => state.user)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            borderRadius: '3rem',
        },
    };
    function closeModal() {
        dispatch(setModalClosed('Session Amount'))
    }

    const submit = (data: SessionAmountDTO) => {
        if (id) {
            putSessionAmount(id, data)
        }
        else {
            postSessionAmount(data)
        }
    }

    console.log(data);

    useEffect(() => {
        if(data){
            setValue('amount' , data.amount)
        }
    } , [data])
    

    return (
        <Modal
            isOpen={sessionAmountModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container>
                <button className='close-button' onClick={closeModal}>
                    <img src={close} alt="img" />
                </button>
                <div className='model-container'>

                    <div className='popup-title' >
                        <h1>Add Standard Session Amount</h1>
                    </div>
                    <div className='add-ingredient-container'>
                        <input type="text" placeholder='Session Amount' {...register('amount')} />
                    </div>

                    <div className='add-button'>
                        <Button title={id ? 'Edit' : "Add"} width="51.2rem" backgroundcolor='var(--primary)' fill='true' onclick={handleSubmit(submit)} />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default AddSessionAmountPopup