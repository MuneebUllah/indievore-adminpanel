import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 4rem;
padding: 4rem;

.title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-weight: 600;
  }

  h5{
    font-size: 1.2rem;
    font-weight: 600;
  }

  button{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 22.7rem;
    background-color: var(--primary);

    p{
      color:var(--white);
    }
  }
}

td , th{
  width: 15rem !important;
}

.th{
  width: 10rem !important;
}
`

export const CardContainer = styled.div`
  width: 100%;
  background-color:var(--white);
  display: flex;
  padding: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;

  .user-profile{
    display: flex;
    gap: 16px;
    color: #2e4d55;

    img{
      width: 12.5rem;
      border-radius: 50%;
    }
  }

  .user-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      font-size:2.9rem;
    }

  }

  .user-info{
    gap: .5rem;
    display: flex;
    flex-wrap: wrap;
    width: 400px;
  }

  .info-row{
    display: flex;
    gap: .5rem;

    img{
      width: 2.4rem;
    }
  }

  .info-detail{
    display: flex;
    gap: 3.5rem;
    align-items: center;

    h1{
      text-align: center;
    }
  }
`;


export const TabeContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 2rem;

@media (max-width:768px){
    flex-direction: column;
}
`

export const TabeCart = styled.div<{active:boolean}>`
    height: 9rem;
    width: 30%;
    color: ${({active})=>active ? 'white' : 'var(--text)'};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    background-color: ${({active})=>active ? 'var(--primary)' : '#F1F1F1'};
    
    h1{
        width: 100%;
        text-align: center;
    }
    
    .categories-tab-img{
        width: 10rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 0 0 10px;
        background-color: ${({active})=>active ? `var(--secondary)` : '#E6E6E6'};

        img{
          width: 30px;

          @media (max-width:992px){
              width: 25px;
          }
          @media (max-width:546px){
              width: 15px;
          }
      }
    }

    @media (max-width:768px){
        width: 100%;
    }


`

export const StatusTabeContainer = styled.div`
height: auto;
width: 100%;
display: flex;
justify-content: start;
gap: 2rem;
align-items: center;
background-color:var(--white);
padding: 2rem;



`

export const Status = styled.span<{active:string}>`
padding: 0.5rem 1rem !important;
border-radius: 0.5rem;
background-color: ${({active})=>active === 'Complete' ? '#209A421A' : active === 'Pending' ? '#8B562533': active === 'Declined' ? '#E2383A1A' :''};
color: ${({active})=>active === 'Complete' ? 'var(--primary)' : active === 'Pending' ? '#8B5625': active === 'Declined' ? '#FF0000' :''};
/* width: 10rem; */
font-size: 1.2rem;
`