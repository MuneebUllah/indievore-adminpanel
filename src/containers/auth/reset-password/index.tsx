import { FC } from 'react'
import {
  Cart,
  Container,
  Form,
} from './style'
import Button from 'components/particles/primary-button'
import login from 'assets/images/login-icon.svg'
import { siteRoutes } from 'utils/helpers/enums/routes.enums'
import { useNavigate } from 'react-router-dom'

import useForget from './useHook'
import { useForm } from 'react-hook-form'
import { ResetDTO } from 'utils/helpers/models/reset.dto'
import FormErrorMessage from 'components/particles/forms/form-error-message'

import email from 'assets/images/mail.svg'

const ResetPassword: FC = () => {

  const { handleSubmit, register,  formState: { errors } } = useForm<ResetDTO>();
  const { forget } = useForget()
  const navigate = useNavigate()



  const onSubmit = (data: ResetDTO) => {
    forget(data)
  }

  return (
    <Container>
      <Cart>
        <img src={login} alt='img' />
        <div className='reset-cart-data'>
          <h1>Reset your Password</h1>
          <p>Enter the email address associated with your account and we will send you a link to reset your password.</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <div className="input-wrap">
            <img src={email} alt="img" width={20} />
              <input
                type='Text'
                placeholder="Email"
                className="auth-input"
                {...register("email", {
                  required: true,
                  pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                  },})}
              />
            </div>
            <FormErrorMessage error={errors.email}/>
            </div>
            <Button title="Confirm" width="100%" fill='true' />
          </Form>
          <div className='back-to-sign-in-cart'>
            <span className='back-to-sign-in' onClick={() => navigate(siteRoutes.login)}>Back to Sign In</span>
          </div>
        </div>
      </Cart>
    </Container>
  )
}

export default ResetPassword