import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

h1{
    font-weight: 600;
}
.title{
    display: flex;
    justify-content: space-between;
    padding:2rem;

}


`

export const InnerContainer =styled.div`
width: 100%;
border-radius: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

h1{
    font-size: 2.2rem;
}
`


export const Cart = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: baseline;
background-color:var(--white);
padding: 2rem;
border-radius: 1rem;

.banner-img-title{
    display: flex;
    gap: 2rem;
    img{
        height: 220px;
        width: 375px;
        border-radius: 20px;
        
        @media (max-width:1200px){
                width: 320px;
                height: 200px;
            }
            @media (max-width:992px){
                width: 260px;
                height: 180px;
            }
            @media (max-width:768px){
                width: 200px;
                height: 150px;
            }
            @media (max-width:546px){
                width: 150px;
                height: 100px;
            }
    }
    span{
        font-size: 2rem;
        font-weight: 400;
        color: var(--text);
    }
}
.banner-title{
    max-width: 50rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
}

p{
    color: #1C1C27;
}

.button{
    display: flex;
    gap: 2rem;
}

.banner-right{
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10rem;
}

.status{
    display: flex;
    gap: 1rem;
    justify-content: end;
}

`
