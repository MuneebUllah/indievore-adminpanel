import styled from "styled-components";

export const Container = styled.form`

.quantity{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.quantity-amount{
    width: 100%;
}

.quantity-unit{
    width: 180px;
}

.popup-title{
    width: 100%;
    text-align: center;

    h1{
        font-weight: 600;
    }
}

.ingredient-image-container{
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 50%;
    gap: 1rem;
    align-items: center;



        .ingredient-image{
            width: 65px;
            border-radius: 50%;
        }

}
`