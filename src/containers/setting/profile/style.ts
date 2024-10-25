import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  align-items: end;

  img{

      width: 9rem;
      height: 2.5rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;
  width: 16rem;
  height: 16rem;
`;

export const ImageContainer = styled.div`
  border-radius: 1rem;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  position: relative;

  img{

      width: 100%;
      height: 100%;
      border-radius: 1rem;
      cursor: pointer;
  }
`;

export const Content = styled.div`

display: flex;
justify-content: start;
gap: 4rem;
align-items: end;
width: 100%;

`