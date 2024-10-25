import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: start;
padding: 2rem;
flex-direction: column;
gap: 2rem;


h1{
    color:#1C1C27 ;
    font-weight: 700;
    font-size: 22px;
}

.graph-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.graph-left{
    width: 70%;
    background-color:var(--white);
    padding: 3rem;
}
.graph-right{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.graph-cart{
    background-color:var(--white);
    width: 35.5rem;
    height: auto;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
    gap: 2rem;

}
.title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.graph{
    width: 18rem;
}

.dropdown-container{
    /* width: 45%; */
    height: 28px;
    position: relative;

    select{
        padding: 0.5rem !important;
        border-radius: 5px !important;
        font-size: 1.2rem;
    option{
        font-size: 1.2rem;
    }
    }

    
}

.dropdown-arrow{
    display: flex;
    gap: .5rem;
    border: 1px solid #808D9E;
    padding: 0.5rem;
    border-radius: .5rem;
}

th , td{
    width: 14rem !important;
}

.th{
    width: 10rem !important;
}

@media (max-width:768px){
    .graph-container{
        display: none;
    }
}
`

export const TopTiles = styled.div`
height: auto;
width: 100%;
background-color:var(--white);
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 2rem;
padding: 2rem;

h1{
    font-size: 3.2rem;

    @media (max-width:992px){
        font-size: 2.4rem;
    }
}
.dashboard-top-tiles-items-data{


}

img{
    width: 84px;
}

@media (max-width:1200px){
img{
    width: 50px;
}
h1{
    font-size: 2.8rem;
}
}
@media (max-width:768px){
img{
    width: 30px;
}
h1{
    font-size: 2.4rem;
}
}
`

export const InfoTile = styled.div<{last:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-right: ${({last})=> last?'0px':'3px'} solid #F0F0F0;
    padding-right: 3rem;

    .percentage-graph{
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        gap: .5rem;
        img{
            width: 20px;
        }
        span{
            font-weight: 700;
            font-size: 1.4rem;
        }
    }

`

export const TableContainer = styled.div`
width: 100%;
background-color:var(--white);
height: auto;
padding: 1.5rem;
`

