import styled from "styled-components";

export const StyledInput = styled.div<{ width?: string }>`
  padding: 1rem;
  width: ${({ width }) => width || '100%'};
  height: 4rem;
  border-radius: 1rem;
  background-color: #FFFFFF1A;
  outline: none;
  font-size: 1.6rem;
  color: #94A3B8;
`;

export  const Container = styled.div`
padding: 1.4rem;
    width: 100%;
    height: 5.6rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    background-color:#FFFFFF1A;
    border-radius: 1rem;
  `;
export  const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    gap: .5rem;
    align-items: center;
    background-color:#FFFFFF1A;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    padding: 1rem;
  `;
  
  export const Input = styled.input`
    width: 91.666667%;
    outline: none;
    font-size: 1.6rem;
    color: #94A3B8;
    border: none;
  `;
  
  export  const IconContainer = styled.div`
    cursor: pointer;
  `;
