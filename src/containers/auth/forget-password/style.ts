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

h1{
color:var(--white);
font-size: 2.4rem;

}
p{
font-size: 1.4rem;
color:var(--white);
}
.forget-cart-data{
  width: 70%;
}

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;
