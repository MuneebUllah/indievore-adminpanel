import styled from "styled-components"

export const StatusTabeCart = styled.div<{active:boolean}>`
    height: 5rem;
    width: 21.4rem;
    display: flex;
    align-items: center;
    color: ${({active})=>active ? 'var(--white)' : 'var(--text)'};
    background-color: ${({active})=>active ? 'var(--primary)': 'var(--light-gray)'};
    border-radius: 1rem;
    cursor: pointer;
    
    h2{
        width: 100%;
        text-align: center;
        font-size: 1.6rem;
    }


`