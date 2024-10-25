import styled from "styled-components";

export const Container = styled.form`
overflow-y: auto !important;
height: 90%;

.add-input{
    display: flex;
    gap: 1rem;
}

.input-container{
    display: flex;
    gap: 1rem;
    align-items: center;
}
.popup-title{
    width: 100%;
    text-align: center; 
    margin-top: 4rem;

    h1{
        font-weight: 600;
    }
}
`