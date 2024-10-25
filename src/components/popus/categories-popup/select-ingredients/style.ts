import styled from "styled-components";

export const Container = styled.form`

.ingredient-data{
    display: flex;
    align-items: center;
    justify-content: start;
    gap:1rem;

    input{
    
        width: 25px !important;
        height: 25px !important;
        accent-color: var(--primary);
    }
    h5{
        color:var(--text) ;
        font-size: 2rem;
        font-weight: 500;

    }
    img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
}

.categories-model-ingredient-container{
    height: 47rem;

    .categories-container{
        display: grid;
        grid-template-columns: auto auto;
        gap: 2rem;
        padding: 2rem;

    }
}

.popup-title{
    width: 100%;
    text-align: center; 
    margin-top: 4rem;

    h1{
        font-weight: 600;
    }
}

.close-button{
    top:-40px;
}

.custom-scrollbar{
    overflow-y: auto !important;
}
`