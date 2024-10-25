import { FC, useState } from 'react'
import {
  Cart,
  Container,
  Form,
} from './style'
import Button from 'components/particles/primary-button'
import login from 'assets/images/login-icon.svg'
import password from 'assets/images/lock.svg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'


const ForgetPassword: FC = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const handleInputTypeChange = () => {
    setInputType(prevType => (prevType === 'text' ? 'password' : 'text'));
  };

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
          <h1>Reset your Password</h1>
          <p>Please enter your new password and confirm password</p>
          <Form>
            <div className="input-wrap">
              <img src={password} alt="img" width={25} height={25} />
              <input
                type={inputType}
                placeholder="Password"
                onChange={(value: any) => handleChange('newPassword', value)}
                value={formData.newPassword}
                className="auth-input"
              />
              <div onClick={handleInputTypeChange}>
                {inputType === 'password' ? (
                  <FaRegEyeSlash size={18} color='#808D9E' />
                ) : (
                  <FaRegEye size={18} color='#808D9E' />
                )}
              </div>
            </div>
            <div className="input-wrap">
              <img src={password} alt="img" width={25} height={25} />
              <input
                type={inputType}
                placeholder="Password"
                onChange={(value: any) => handleChange('confirmPassword', value)}
                value={formData.confirmPassword}
                className="auth-input"
              />
              <div onClick={handleInputTypeChange}>
                {inputType === 'password' ? (
                  <FaRegEyeSlash size={18} color='#808D9E' />
                ) : (
                  <FaRegEye size={18} color='#808D9E' />
                )}
              </div>
            </div>

            <Button title="Confirm" width="100%" fill='true' />

          </Form>
        </div>
      </Cart>
    </Container>
  )
}

export default ForgetPassword