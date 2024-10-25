import styled from "styled-components";

export const ViewDetail = styled.div`
display: flex;
gap: 3rem;
flex-direction: column;
padding: 2rem;

.title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1{
        font-weight: 600;
    }
}

.print-container{
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.view-detail-top-section{
    width: 100%;
    height: 8.5rem;
    background-color:var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-radius: 1rem;
    color:var(--white);

    h2{
        font-size: 2.5rem;
    }

}
.date-time{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}

.date-time-container{
    display: flex;
    gap: 2rem;
}

`

export const ReceipeDetail = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

h2{
    font-size:3.6rem;
    font-weight: 600;
}
h1{
    padding-top: 2rem;
}
p{
    font-size: 1.6rem;
    font-weight: 500;
    color:var(--text);
}

li{
    font-size: 1.6rem;
    list-style: none;
}

.receipe-img{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 12rem;

    span{
        font-size: 2rem;
    }

    .receipe-img-detail{
        display: flex;
        align-items: end;
        justify-content: end;
        flex-direction: column;
        gap: .5rem;

        .receipe-imag-detail-cart{
            width: 15rem;
            display: flex;
            gap: 1rem;
        }
    }
}
`