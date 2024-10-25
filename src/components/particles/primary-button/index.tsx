import { FC } from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
  onclick?: () => void;
  fill?: string;
  width?: string;
  title?: any;
  backgroundcolor?:string;
}

const StyledButton = styled.button<PrimaryButtonProps>`
  height: 5rem;
  width: ${({ width }) => width || '100%'};
  border-radius: 5px;
  background-color:${({backgroundcolor}) => (backgroundcolor ? backgroundcolor : 'var(--primary)')};
  color: ${({ fill }) => (fill ? 'white' : 'var(--primary)')};
  cursor: pointer;
  text-align: center;
  align-items:center;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content:center;

`;

const Button: FC<PrimaryButtonProps> = ({
  onclick,
  width,
  title,
  backgroundcolor,
  fill,
}) => {
  return (
    <StyledButton
      onClick={onclick}
      width={width}
      backgroundcolor={backgroundcolor}
      fill={fill}
    >
      {title}
    </StyledButton>
  );
};

export default Button;