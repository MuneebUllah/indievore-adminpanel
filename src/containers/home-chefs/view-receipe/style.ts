import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 4rem;
padding: 4rem;

h1{
  font-weight: 600;
}

.description{
width: 100%;
height: auto;

p{
  padding-top: 1.5rem;
}
}

.category-content{
  width: 100%;

  .category-content-buttons{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-top: 1rem;

    p{
      width: 245px;
      font-size: 1.8rem;
      height: 5rem;
      background-color: rgba(0, 176, 135, 0.09);
      color:var(--primary) ;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }

}

`

export const CardContainer = styled.div`
  width: 100%;
  background-color:var(--white);
  display: flex;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  height: auto;
  align-items: center;

  .user-profile{
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 3rem;
    font-weight: 500;
    font-size: 23px;
    color: #2e4d55;
  }
  .user-detail{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;

    h1{
      font-size:2.9rem;
    }

  }

  .user-info{
    text-align: center;
    gap: .5rem;
    margin: 8px;
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    height: 5rem;
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

  .date-rate{
    display: flex;
    width: 100%;
    gap: 8rem;

    .date , .rate{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      h2{
        font-size: 1.8rem;
        font-weight:600;
        color: var(--medium-black);
      }
    }
  }

  .receipe-title{
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1{
      color: var(--medium-black);
    }
  }
`;


export const StatusTabeContainer = styled.div`
width: 100%;
height: 9rem;
display: flex;
justify-content: start;
gap: 2rem;
align-items: center;
background-color:var(--white);
padding: 2rem;



`
export const StatusTabeCart = styled.div<{active:boolean}>`
    height: 100%;
    width: 21.4rem;
    display: flex;
    align-items: center;
    color: ${({active})=>active ? 'white' : 'var(--text)'};
    background-color: ${({active})=>active ? 'var(--primary)': 'var(--light-gray)'};
    border-radius: 1rem;
    cursor: pointer;
    
    h2{
        width: 100%;
        text-align: center;
        font-size: 1.6rem;
    }


`