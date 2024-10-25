import {
  Aside,
  LogoContainer,
  Logo,
  Ul,

} from './style';

import logo from 'assets/images/sidebar-icon.svg'
import logo1 from 'assets/images/LOGO_1_.png'
import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

import { dispatch } from 'store';
import { RootState } from "../../../store/root-reducer/index";
import { setSideBarClosed, setSideBarOpened } from 'store/user-slice';

interface SidebarProps {
  children: ReactNode;
}
const Sidebar: FC<SidebarProps> = ({ children }) => {
  const { isSidebarExpanded } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        dispatch(setSideBarClosed());
      }
      if (window.innerWidth > 992) {
        dispatch(setSideBarOpened());
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <Aside issidebarexpanded={isSidebarExpanded} className='no-print'>
      <LogoContainer issidebarexpanded={isSidebarExpanded}>
        <Logo issidebarexpanded={isSidebarExpanded} src={isSidebarExpanded ? logo : logo1} alt='Logo.png' />
      </LogoContainer>
      <Ul>{children}</Ul>
    </Aside>
  );
};

export default Sidebar;