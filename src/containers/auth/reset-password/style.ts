import styled from "styled-components";
import background from 'assets/images/login-background.svg'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
color:var(--white);
`
export const Cart = styled.div`
width: 57.8rem;
height: 57.8rem;
background-color: var(--shadow-black);
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;

.reset-cart-data{
  width: 70%;

}

h1{
  font-size: 2.4rem;
}
p{
  font-size: 1.4rem;
}
.back-to-sign-in-cart{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.back-to-sign-in{
  font-size: 1.4rem;
  cursor: pointer;
}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-top: 2rem;
`;
