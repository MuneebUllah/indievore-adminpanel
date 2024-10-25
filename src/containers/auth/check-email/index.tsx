import { FC, useState } from 'react'
import {
  Cart,
  Container,
  TextCart,
} from './style'
import login from 'assets/images/login-icon.svg'
import message from 'assets/images/message.svg'

const CheckMail: FC = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });


  const handleChange = (field: any, value: any) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  return (
    <Container>
      <Cart>
        <img src={login} alt='img' />
        <div className='forget-cart-data'>
          <img src={message} alt='img' width={150} />
          <div className='chack-mail-data'>
            <h1>Check your Email</h1>
            <p>Thank you, check your email for instructions to reset your password</p>
          </div>
        </div>
        <TextCart>
          <div className='receive-email-text'>Don’t receive an email?<span className='receive-resend-text'>Resend</span></div>
        </TextCart>
      </Cart>
    </Container>
  )
}

export default CheckMail