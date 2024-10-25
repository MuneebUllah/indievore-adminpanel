import styled from 'styled-components';
import { HiMiniBars3 } from 'react-icons/hi2';

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 7.5rem;
  right: 4rem;
  height: 12rem;
  width: 14rem;
  background-color:var(--white);
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.75rem;
`;

export const DropdownItem = styled.p`
  font-weight: 600;
  color: #1c1c27;
  padding-left: 0.5rem;
  cursor: pointer;

  &:last-child {
    color: #ff0000;
  }
`;


export const Container = styled.div`
  height: 8.8rem;
  display: flex;
  padding:0 2rem;

  .navbar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-size: 2.4rem;
  }

  .title{
    display: flex;
    gap: 1rem;
  }
`;

export const NavSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NotificationButton = styled.div`
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  bottom: auto;
  left: auto;
  right: 0.5rem;
  top: 0.5rem;
  transform: translateX(50%) translateY(-50%);
  background-color: var(--reset-button);
  padding: 0.3125rem 0.5rem;
  border-radius: 9999px;
  color:var(--white);
  font-weight: bold;
  font-size: 1.2rem;
  width:2rem;
  height: 2rem;
  text-align: center;
`;


export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  .profile-image{
    width: 4.5rem;
    border-radius: 50%;

  }

  h5{
    color: #2E4D55;
    font-size: 1.6rem;
    font-weight: 600;

  }

  p{
    font-weight: 500;
    color: var(--text);

  }
`;

export const Divider = styled.hr`
  background-color: #E2E8F0;
  height: 0.10625rem;
`;


export const Icon = styled(HiMiniBars3)<{ size?: number; color?: string }>`
  cursor: pointer;
  color: ${({ color }) => color || '#000000'};
  font-size: ${({ size }) => (size ? `${size}px` : '30px')};
`;