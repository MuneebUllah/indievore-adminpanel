import styled from "styled-components";

export const Container = styled.div`
display: flex;
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

.term-and-condition-container{
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        font-weight: 600;
    }
}
`