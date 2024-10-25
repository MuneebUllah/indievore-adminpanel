import { FC } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import { Container, Status } from './style'

interface DietaryModelProps {
    setIsOpen: (isOpen: boolean) => void,
    modalIsOpen: boolean
}


const DietaryChoisePopup: FC<DietaryModelProps> = ({ modalIsOpen, setIsOpen }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            width: '80rem',
            height: '90vh',
            borderRadius: '3rem'
        },
    };
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='close-button' onClick={closeModal}>
                <img src={close} alt="img" />
            </button>
            <Container className=' p-custom-scrollbar-8 custom-scrollbar'>
                <div className='title'>
                    <h1>Dietary Choices</h1>
                </div>
                <div className='dietary-choice-container'>
                    <div className='top-cart'>
                        <div className='cart'>
                            <h1>What do you like about Indian food?</h1>
                            <div>
                                <Status >{'Rich and diverse flavors'}</Status>
                            </div>
                        </div>
                        <div className='cart'>
                            <h1>What do you like about Indian food and what category?</h1>
                            <div>
                                <Status >{'Wide variety of vegetarian options'}</Status>
                            </div>
                        </div>
                        <div className='cart'>
                            <h1>What do you like about Indian food?</h1>
                            <div>
                                <Status >{'Sweet, spicy, and savory flavors'}</Status>
                            </div>
                        </div>
                        <div className='cart'>
                            <h1>What do you like about Indian food?</h1>
                            <div>
                                <Status>{'Rich and diverse flavors'}</Status>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-cart'>
                        <div className='cart'>
                            <h1>Do you follow any of the following diets?</h1>
                            <p>We can help you pick dishes based on your diet needs</p>
                            <div className='dietaries'>
                                <Status>{'Vegan'}</Status>
                                <Status>{'Low-Carb'}</Status>
                                <Status>{'High Protein'}</Status>
                                <Status>{'Keto'}</Status>
                            </div>
                        </div>
                        <div className='cart'>
                            <h1>Are you looking for any specific ingredient based recipes?</h1>
                            <p>We can help you pick dishes based on your diet needs</p>
                            <div className='dietaries'>
                                <Status>{'Greens'}</Status>
                                <Status>{'Turmeric'}</Status>
                                <Status>{'Cauliflower'}</Status>
                                <Status>{'Curry'}</Status>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default DietaryChoisePopup