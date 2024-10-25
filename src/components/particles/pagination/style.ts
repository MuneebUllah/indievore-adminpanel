import styled from "styled-components";

export const PaginationContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const PaginationInfo = styled.p`
  font-weight: 600;
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Button = styled.button<{ active: boolean; disabled: boolean }>`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid #E2E8F0;
  align-items: center;
  background-color: ${({ active }) => (active ? "black" : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:disabled {
    cursor: not-allowed;
  }
`;
