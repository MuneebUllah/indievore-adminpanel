import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 4rem;
padding: 3rem;

.title{
  h1{
    font-weight: 600;
  }
}

.profile{
  h1{
    font-weight: 600;
  }
}

td{
  width: 18rem !important;
}

th{
  width: 18rem !important;
}

.th{
  width: 10rem !important;
}

.img{
  width: 60px;
  border-radius: 50%;
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
    width: 48%;
    height: 9rem;
    display: flex;
    align-items: center;
    background-color: ${({active})=>active ? 'var(--primary)':'var(--white)'};
    color: ${({active})=>active ? 'var(--white)':'var(--text)'};
    border-radius: 10px;
    
    h1{
      width: 100%;
      text-align: center;
    }
    
    .categories-tab-img{
      background-color: ${({active})=>active ? 'var(--secondary)':'#E6E6E6'};
      width: 10rem;
      height: 100%;
      display: flex;
      justify-content: center;
      border-radius: 10px 0 0 10px;

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
width: 100%;
height: auto;
display: flex;
justify-content: start;
gap: 2rem;
flex-wrap: wrap;
background-color: white;
padding:1.5rem ;
border-radius: 1rem;
`