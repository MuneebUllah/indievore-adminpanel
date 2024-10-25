import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;


.categories-title{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }
}

.close-button{
    height: 5.6rem !important;
    position: relative !important;
    float: inline-end !important;
}

    th , td{
        width: 16.5rem !important;
    }


.link-button{
    width: 32px;
    height: 32px !important;
    background-color: var(--medium-black);
}
`

export const TabeContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 2rem;

@media (max-width:768px){
    flex-direction: column;
}
`

export const TabeCart = styled.div<{active:boolean}>`
    height: 9rem;
    width: 48%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({active})=>active ? 'white' : 'var(--text)' };
    background-color: ${({active})=>active ? 'var(--primary)':'white'};
    border-radius: 1rem;
    
    h1{
        width: 100%;
        text-align: center;
    }
    
    .categories-tab-img{
        background-color: ${({active})=>active ? 'var(--secondary)' : '#E6E6E6'};
        width: 10rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 0 0 10px;

        img{
            width: 30px;

            @media (max-width:992px){
                width: 25px;
            }
            @media (max-width:546px){
                width: 15px;
            }
        }

    }

    @media (max-width:768px){
        width: 100%;
    }


`

export const Tbody = styled.tbody`

.actions{

  button{
    height: 3.7rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    background-color: #121212;
  }
}
`