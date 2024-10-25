import React, { useState } from 'react';
import { IconInput } from '../../../components/particles/forms/input';
import Swal from 'sweetalert2';
import {Container , InputWrapper , Button , InnerContainer , ContentContainer , ProfileContainer} from './style'
import { Profile } from '../profile';
import ProfilePopup from 'components/popus/profile-popup';
import { useSelector } from 'react-redux';
import { RootState } from 'store';



interface Passwords {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}


const Setting: React.FC = () => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const { profileModalIsOpen } = useSelector((state:RootState) => state.user)
  const [passwords, setPasswords] = useState<Passwords>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const update = () => {
    if (passwordsMatch) {
      setPasswords({ oldPassword: passwords.newPassword, newPassword: '', confirmPassword: '' });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Your New Password And Confirm Password Is Not Same",
        icon: "error",
      });
    }
  };


  const handleChange = (field: keyof Passwords, value: string) => {
    const updatedPasswords = {
      ...passwords,
      [field]: value,
    };
    setPasswords(updatedPasswords);

    if (field === 'newPassword' || field === 'confirmPassword') {
      setPasswordsMatch(updatedPasswords.newPassword === updatedPasswords.confirmPassword);
    }
  };

  const allFieldsFilled = passwords.oldPassword && passwords.newPassword && passwords.confirmPassword;

  return (
    <ProfileContainer>
    <InnerContainer>
      <h1>Admin profile</h1>
      <ContentContainer>
        <Profile setIsOpen={setIsOpen}/>
    <Container>
      <h1>Change Password</h1>
      <div className="input-container">
        <label htmlFor="current-password">Current Password:</label>
        <InputWrapper>
          <IconInput
            placeholder="current password"
            onchange={(value: string) => handleChange('oldPassword', value)}
            value={passwords.oldPassword}
          />
        </InputWrapper>
      </div>
      <div>
        <div>
          <div className="input-container">
            <label htmlFor="new-password">New Password</label>
            <InputWrapper>
              <IconInput
                placeholder="New Password"
                onchange={(value: string) => handleChange('newPassword', value)}
                value={passwords.newPassword}
              />
            </InputWrapper>
          </div>
          <div className="input-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <InputWrapper>
              <IconInput
                placeholder="Confirm Password"
                onchange={(value: string) => handleChange('confirmPassword', value)}
                value={passwords.confirmPassword}
              />
            </InputWrapper>
            {!passwordsMatch && <p>New password and confirm password do not match</p>}
          </div>
        </div>
      </div>
      <div>
        <Button disabled={!allFieldsFilled} onClick={update}>
        Update Password
        </Button>
      </div>
    </Container>
    </ContentContainer>
      </InnerContainer>
      {profileModalIsOpen ? <ProfilePopup modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> : ''}
    </ProfileContainer>
  );
};

export default Setting;
