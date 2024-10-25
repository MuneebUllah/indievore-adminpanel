import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

.title{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }
}

.add-retailer{
    height: 5rem;
    width: 16rem;
    background-color: var(--reset-button);
}

td , th{
    width: 18rem !important;
}

.th{
    width: 10rem !important;
}

.img{
    width: 4rem;
    border-radius: 50%;
}
`