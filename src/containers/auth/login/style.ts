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
.login-cart-data{
  width: 70%;
}

.login-button{
  padding-top: 3rem;
}

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
`;

export const CheckBoxforgetContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;

h2{
  font-size: 1.4rem;
  color: #FFFFFF;
  cursor: pointer;
}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  input{
    width: 1.25rem;
    height: 1.25rem;

  }

  label{
    font-size: 1.4rem;
    color: #FFFFFF;

  }
`;
