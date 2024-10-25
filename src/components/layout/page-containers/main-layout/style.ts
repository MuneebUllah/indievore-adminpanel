import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  overflow: hidden;
`; 
interface AsideProps{
    isSidebarExpanded:boolean
}

export const MainContent = styled.div<AsideProps>`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  flex: ${({ isSidebarExpanded }) => (isSidebarExpanded ? '1' : '100%')};
  transition: flex 0.5s ease; /* Smooth transition for content resizing */
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: var(--light-gray);
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: auto;
  padding-bottom: 1rem;
`;
