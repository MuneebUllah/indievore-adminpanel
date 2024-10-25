import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  padding-top: 2rem;
  gap: 3.5rem;

  .input-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label{
      font-size: 1.8rem;
      font-weight: 600;
      color:#1C1C27 ;

  }

  p{
      color: #E60000;
  }

  h1{
    font-weight: 700;
    font-size: 2.9rem;
  }
`;

export const InputWrapper = styled.div`
  background-color: var(--light-gray);

  input{
    border: none !important;
  }
`;


export const Button = styled.button<{ disabled: boolean }>`
  background-color: var(--medium-black);
  width: 21rem;
  height: 5rem;
  padding: 0.75rem 3rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    background: var(--medium-black) !important;
    color:var(--white) !important;
  }
  `;

export const InnerContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ContentContainer = styled.div`
  background-color:var(--white);
  width: 100%;
  min-height: 80vh;
  border-radius: 0.5rem; // rounded-lg
  display: flex;
  flex-direction: column;
  padding: 2.5rem; // px-10 py-8
  gap: 2.5rem; // gap-10
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;