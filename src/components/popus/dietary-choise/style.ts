import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    overflow-y: auto;
    height: 90%;

.title{

    h1{
        font-weight: 600;
    }
}

    .dietary-choice-container{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    padding: 0 2rem;

}

.dietaries{
    display: flex;
    gap: 1rem;
}

.cart{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        display: list-item;
    }

    li{
        font-size: 1.8rem;
    }
}
.top-cart{
    padding-bottom: 3rem;
    border-bottom: 2px solid #808D9E33;
}

.top-cart , .bottom-cart{
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

`

export const Status = styled.span`
padding: 0.5rem 1rem !important;
border-radius: 0.5rem;
background-color: #209A421A;
color:  var(--primary);
font-size: 1.8rem;

`