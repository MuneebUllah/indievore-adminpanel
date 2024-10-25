import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;

.img{
  width: 4rem;
  border-radius: 50%;
}

td , th{
  width: 18rem !important;
}

.th{
  width: 10rem !important;
}
`

export const StatusTabeContainer = styled.div`
width: 100%;
height: 9rem;
display: flex;
justify-content: start;
gap: 2rem;
align-items: center;
background-color:var(--white);
padding: 2rem;
z-index: 10;


`

export const CardContainer = styled.div`
  width: 100%;
  background-color:var(--white);
  display: flex;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  height: 45rem;
  align-items: center;
  flex-direction: column;

  .user-profile{
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 16px;
    gap: 16px;
    font-size: 23px;
    color: #2e4d55;
    position: relative;
    top: -100px;
    right: -50px;
  }
  .user-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;
    top: 30px;
    gap: 1rem;

    h1{
      font-size:2.9rem;
      color:var(--white);
      position: relative;
      top: -25px;
    }
    
    p{
      font-weight: 500;
      color: var(--text);
    }

  }

  .contect-list{
    display: flex;
    gap: 5rem;
  }

  .info-row{
    display: flex;
    gap: .5rem;
  }

  .info-detail{
    display: flex;
    gap: 1.5rem;
    align-items: center;
    p{
      font-size: 1.6rem;
      font-weight: 400;
      color: #A9A9A9;
    }
  }

  .retailer-bg-img{
    width: 100%;

    img{
      width: 100%;
    }
  }
`;

export const Status = styled.span<{active:string}>`
padding: 0.5rem 1rem !important;
border-radius: 0.5rem;
background-color: ${({active})=>active === 'Complete' ? '#209A421A' : active === 'Pending' ? '#8B562533': active === 'Declined' ? '#E2383A1A' :''};
color: ${({active})=>active === 'Complete' ? 'var(--primary)' : active === 'Pending' ? '#8B5625': active === 'Declined' ? '#FF0000' :''};
/* width: 10rem; */
font-size: 1.2rem;
`