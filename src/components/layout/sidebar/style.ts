// import styled from "styled-components"
import sidebarImg from 'assets/images/sidebar-image.png'
import styled from 'styled-components';


interface AsideProps {
  issidebarexpanded: boolean;
}

export const Aside = styled.aside<AsideProps>`
  height: 100vh;
  width: ${({ issidebarexpanded }) => (issidebarexpanded ? '27rem' : '5rem')}; /* 64px -> 20rem and 20px -> 5rem */
  background-image: url(${sidebarImg});
  background-size: cover;
  background-position: center;
  transition: width 0.3s ease-in-out;
  background-color: var(--primary);
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface LogoContainerProps {
  issidebarexpanded: boolean;
}

export const LogoContainer = styled.div<LogoContainerProps>`
  padding: ${({ issidebarexpanded }) => (issidebarexpanded ? '3rem' : '0')};
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--light-gray);
`;

export const Logo = styled.img<LogoContainerProps>`
  transition: width 0.3s ease-in-out;
  width: ${({ issidebarexpanded }) => (issidebarexpanded ? '15rem' : '3rem')}; /* 32px -> 8rem and 12px -> 3rem */
  overflow: hidden;
`;


export const Ul = styled.ul`
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  margin-top: 1.4rem;
`;