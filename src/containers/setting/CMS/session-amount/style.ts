import styled from "styled-components";

export const Container = styled.div`
display: flex;
/* justify-content: space-between; */
flex-direction:column ;
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

.amount-container{
    width: 100%;
    margin-top: 3rem;
    display: flex;
    gap: 2rem;

    .amount-cart{
        border: 2px solid #C7C7C7;
        border-radius: 1rem;
        padding: 1rem;
        width: 26rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h1{
            font-weight: 600;
        }

        .amount{
            display: flex;
            justify-content: center;
            align-items: baseline;
            
            h3{
                font-size: 11rem;
            }
            h4{
                font-size: 5rem;
            }
        }
    }
}

`