import { useState } from 'react';
import { useForm } from 'react-hook-form'
import {
  Cart,
  Container,
  Form,
  CheckboxContainer,
  CheckBoxforgetContainer
} from './style'
import loginIcon from 'assets/images/login-icon.svg'

import Button from 'components/particles/primary-button';
import { useNavigate } from 'react-router-dom';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import useLogin from './useHook';
import email from 'assets/images/mail.svg'

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import password from 'assets/images/lock.svg'
import { LoginDTO } from 'utils/helpers/models/login.dto';
import FormErrorMessage from 'components/particles/forms/form-error-message';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Spinner from 'components/particles/loaders/spinner';


export default function Login() {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');
  const { handleSubmit, register,  formState: { errors } } = useForm<LoginDTO>();
  const { login } = useLogin()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state:RootState) => state.user)


  const onSubmit = (data: LoginDTO) => {
    login(data)
  }


  const handleInputTypeChange = () => {
    setInputType(prevType => (prevType === 'text' ? 'password' : 'text'));
  };

  return (
    <Container>
      <Cart>
        <img src={loginIcon} alt='img' />
        <div className='login-cart-data'>
          <h1>Login to your Account</h1>
          <p>Welcome back! please enter your detail</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <div className="input-wrap">
              <img src={email} alt="img" width={20} />
              <input
                type="text"
                placeholder='Email'
                className="auth-input"
                {...register("email", {
                  required: true,
                  pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                  },
              })}              />
            </div>
            <FormErrorMessage error={errors.email}/>
            </div>
            <div>
            <div className="input-wrap">
              <img src={password} alt="img" width={25} height={25} />
              <input
                type={inputType}
                placeholder='Password'
                className="auth-input"
                {...register('password', {required: true})}
              />
              <div onClick={handleInputTypeChange}>
                {inputType === 'password' ? (
                  <FaRegEyeSlash size={18} color='#808D9E' />
                ) : (
                  <FaRegEye size={18} color='#808D9E' />
                )}
              </div>
            </div>       
             <FormErrorMessage error={errors.password}/>
             </div>

            <CheckBoxforgetContainer>
              <CheckboxContainer>
                <input type="checkbox" />
                <label>Remember me</label>
              </CheckboxContainer>
              <h2 className='forget-label' onClick={() => { navigate(siteRoutes.ResetPassword) }}>Forget Password?</h2>
            </CheckBoxforgetContainer>
            <div className='login-button'>
              <Button title={isLoading ?<Spinner /> :"Login"} width="100%" fill='true' />
            </div>

          </Form>
        </div>
      </Cart>
    </Container>
  )
}
