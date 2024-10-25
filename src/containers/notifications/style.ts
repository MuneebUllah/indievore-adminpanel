import styled from "styled-components";

export const Container = styled.div`
padding: 2rem;


h1{
    font-weight:600 ;
    color: var(--secondary);
    padding-bottom: 2rem;
}
`

export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
background-color: var(--white);
padding:3rem ;

.time{
    display: flex;
    align-items: center;
    justify-content: center;
}

span{
    font-size: 1.4rem;
    color: #1C1C27;
}
`
export const Cart = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FBFBFB;
padding: 2rem;
border-radius: 1rem;
span{
    color: var(--reset-button);
}
`
