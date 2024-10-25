import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
gap: 2rem;


.title{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }
}
.dietaries{
    display: flex;
    gap: 1rem;
}

.dietaries-cart{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
    .cart{
    display: flex;
    gap: 2rem;
    width: 100%;
    background-color: white;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 1rem;



    li{
        font-size: 1.8rem;
    }
}

`
export const Status = styled.span`
padding: 0.5rem 1rem !important;
border-radius: 0.5rem;
background-color: #209A421A;
color:  var(--primary);
font-size: 1.8rem;

`