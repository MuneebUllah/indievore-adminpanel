import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;


.categories-title{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 600;
    }

}

th , td{
        width: 8.5rem !important;
    }
`
export const CardContainer = styled.div`
display: flex;
gap: 2rem;
background-color:var(--white);
padding: 2rem;
border-radius: 1rem;
align-items: center;


.profile-img{
  width: 10rem;
  border-radius: 50%;
}


  .user-info{
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .info-row{
    width: 18rem;
    display: flex;
    gap: 1.5rem;

    img{
      width: 2rem;
    }
  }

  button{
    background-color: var(--primary);
    display: flex;
    width: 20rem;
    height: 5rem;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dietary-icon{
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    background-color: #00B08726;
    display: flex;
    justify-content: center;

    img{
      width: 2rem;
    }
  }

  h3{
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
  }

  p{
    font-size: 1.4rem;
  }
`;
