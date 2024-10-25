import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
align-items: center;

.title{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.term-and-condition-container{
    width: 100%;
    padding: 3rem;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    
    h1{
        font-weight: 600;
    }
    
    .term-and-condition-cart{
        background-color: white;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2rem;
    }
}
`