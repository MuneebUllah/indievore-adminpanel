import styled from "styled-components";

export const ProfileImageWrapper = styled.div`
  position: relative;
  margin: 1.5rem 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const ProfileImageContainer = styled.div`
  border-radius: 1rem;
  padding: 0.25rem;
  width: 16rem;
  height: 16rem;
  position: relative;

  img{

      width: 100%;
      height: 100%;
      border-radius: 1rem;
      cursor: pointer;
  }
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIconContainer = styled.div`
  background-color:var(--white);
  border-radius: 50%;
  position: absolute;
  right: 5rem;
  bottom: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.form`

.popup-title{
  width: 100%; 
  text-align: center;

  h1{
    font-weight: 600;
  }
}
`