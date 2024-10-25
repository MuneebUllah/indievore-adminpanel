import styled from "styled-components";


export const TabeContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
/* gap: 1rem; */
align-items: center;
flex-wrap: wrap;
gap: 2rem;
padding-top: 2rem;



`

export const TabeCart = styled.div<{active:boolean}>`
       background-color: ${({active})=>active ? 'var(--primary)' : '#F1F1F1'};
       color: ${({active})=>active ? 'white' : 'var(--text)'};
    height: 9.2rem;
    width: 48%;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    
    h1{
        width: 100%;
        text-align: center;
    }
    
    .categories-tab-img{
        width: 10rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 0 0 10px;
        background-color: ${({active})=>active ? 'var(--secondary)' : '#E6E6E6'};
        
        .img-tab{
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: ${({active})=>active ? '#3A5F55' : '#E1E4E3'};
            display: flex;
            justify-content: center;
            align-items: center;

        }
        img{
            filter: ${({active})=>active && 'invert(1)'};
        }
    }


`

export const Container = styled.div`
padding: 2rem;
display: flex;
justify-content: center;
gap: 2rem;
flex-direction: column;

.title{

    
    h1{
        font-weight: 600;
    }
}
    `