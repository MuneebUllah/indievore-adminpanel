import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

h1{
  font-weight: 600;
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
  justify-content: space-between;

  .cart{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

`;