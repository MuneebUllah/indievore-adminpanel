import { FC, useRef } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import camera from "assets/images/camera.svg";

import {
  ProfileImageContainer,
  ProfileImageWrapper,
  ProfileImage,
  EditIconContainer,
  Container
} from './style'

import Button from 'components/particles/primary-button';
import { useForm } from 'react-hook-form';
import { ProfileDTO } from 'utils/helpers/models/profile.dto';
import FormErrorMessage from 'components/particles/forms/form-error-message';

interface ProfileModelProps {
  setIsOpen: (isOpen: boolean) => void,
  modalIsOpen: boolean
}

const ProfilePopup: FC<ProfileModelProps> = ({ modalIsOpen, setIsOpen }) => {

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
    setIsOpen(false);
  }

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileDTO>()


  const onSubmit = (data: ProfileDTO) => {
    console.log(data);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
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
            <h1 >Edit Profile</h1>
          </div>
          <div className='add-ingredient-container'>
            <ProfileImageWrapper>
              <ProfileImageContainer>
                <ProfileImage
                  src={'https://picsum.photos/100'}
                  alt="avatar"
                  onClick={handleImageClick}
                />
                <EditIconContainer onClick={handleImageClick}>
                  <img src={camera} alt='img' />
                </EditIconContainer>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  accept="image/*"
                  {...register('image')}
                />
              </ProfileImageContainer>
            </ProfileImageWrapper>
            <div>
              <input
                type="text"
                placeholder='Name'
                {...register('name', { required: true })}
              />
              <FormErrorMessage error={errors.name} />
            </div>
            <div>
              <input
                type="text"
                placeholder='Email'
                {...register('email', { required: true })}
              />
              <FormErrorMessage error={errors.email} />
            </div>
            <div>
              <input
                type="text"
                placeholder='Phone Number'
                {...register('phone', { required: true })}
              />
              <FormErrorMessage error={errors.phone} />
            </div>
          </div>

          <div className='add-button'>
            <Button title="Update" width="51.2rem" backgroundcolor='var(--primary)' fill='true' />
          </div>
        </div>
      </Container>
    </Modal>
  )
}

export default ProfilePopup