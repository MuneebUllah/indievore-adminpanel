import styled from "styled-components";

export const Container = styled.div`

.ingredient-data{
    display: flex;
    align-items: center;
    justify-content: start;
    gap:1.5rem;

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
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    height: 47rem;
    overflow-x: auto;
    padding-left: 2rem;
    justify-content: start;
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

.inner-container{
    border: 1px solid #F1F1F1;
    padding: 4rem;
    border-radius: 1.8rem;
}

.data-table{
    table{
        gap: 0 !important;
    }
}

th , td{
        width: 16.5rem !important;
    }

    .custom-scrollbar{
        overflow-y: auto !important;
    }
`

export const Tbody = styled.tbody`
gap: 0 !important;

.actions{

  button{
    height: 2.8rem;
    width: 10.5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    background-color:var(--reset-button);

    p{
        color: var(--white);
        font-size: 1.2rem;
    }
  }
}
`