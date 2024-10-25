import styled from "styled-components";

export const Container = styled.div`
display: flex;
/* justify-content: space-between; */
flex-direction: column;
align-items: center;


.title{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }
}

`


export const AllManageStateContainer =styled.div`
width: 100%;
border-radius: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

`


export const Cart = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: start;
background-color:var(--white);
padding: 2rem;
gap: 2rem;

.banner-img-title{
    display: flex;
    gap: 2rem;
    img{
        height: 288px;
        width: 154px;
        border-radius: 20px;
    }
    span{
        font-size: 2rem;
        font-weight: 400;
        color: var(--text);
    }
}
.banner-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}

p{
    color: #1C1C27;
}


`