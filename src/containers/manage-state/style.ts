import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

.title{

    h1{
        font-weight: 600;
    }
}

th , td{
  width: 14rem !important;
}

.th{
  width: 6rem !important;
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
    width: 48%;
    min-width: 50rem;
    height: 9rem;
    display: flex;
    align-items: center;
    background-color: ${({active})=>active ? 'var(--primary)':'var(--white)'};
    color: ${({active})=>active ? 'var(--white)':'var(--text)'};
    border-radius: 10px;
    
    h1{
      width: 100%;
      text-align: center;
    }
    
    .categories-tab-img{
    background-color: ${({active})=>active ? 'var(--secondary)':'#E6E6E6'};
      width: 10rem;
      height: 100%;
      display: flex;
      justify-content: center;
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