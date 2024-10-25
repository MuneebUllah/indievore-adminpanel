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
gap: 3.5rem;

h1{
color:var(--white);
font-size: 2.4rem;
}
p{
font-size: 1.4rem;
color:var(--white);
text-align: center;
}
.forget-cart-data{
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}

.chack-mail-data{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

}

`

export const TextCart = styled.div`
.receive-email-text{
  font-size: 1.4rem;
  color:var(--white);
}
.receive-resend-text{
  font-size: 1.4rem;
  color: var(--reset-button);
  cursor: pointer;

}
`