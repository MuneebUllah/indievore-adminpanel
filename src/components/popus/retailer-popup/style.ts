import styled from "styled-components";

export const Container = styled.form`

.model-container{
    h1{
        font-weight: 600;
    }
}

.add-retailer-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    width: 100%;
    padding: 0 2rem;

    .image-container{
        width: 100%;
    }

    .retailer-input{
        width: 48%;
        
    }
        input{
            height: 5.2rem;
            background-color: var(--light-gray);
            border-radius: 5px;
            outline-style: none;
            border: none;
        }
}
`