import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

`


export const CardContainer = styled.div`
  width: 100%;
  background-color:var(--white);
  display: flex;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  height: auto;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  .user-profile{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(18, 18, 18, 1);
    border-bottom: 2px solid rgba(226, 232, 240, 1);
    padding-bottom: 3rem;

    .profile{
      display: flex;
      gap: 16px;
    }
  }
  .user-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    h1{
      font-size:2.9rem;
    }
    
    p{
      font-weight: 700;
      color: #1C1C27;
    }

  }

  .location{
    width: 100%;
    display: flex;
    justify-content: end;
    gap: .5rem;
    padding:  1rem 0;
  }

`;