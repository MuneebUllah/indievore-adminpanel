import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import { sidebarData } from 'utils/helpers/constants/data';
import SidebarItem from 'components/layout/sidebar/sidebar-items';
import { Container, FlexContainer, Main, MainContent } from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import LineLoader from 'components/particles/loaders/line-loader';
interface MainLayoutProps {
  children: ReactNode;
}


const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isSidebarExpanded , isLoading } = useSelector((state: RootState) => state.user);
  
  return (
    <Container>
      <FlexContainer>
        <MainContent isSidebarExpanded={isSidebarExpanded}>
          <Header />
          <Main className='p-custom-scrollbar-8 custom-scrollbar'>
          {isLoading ? <LineLoader /> :''}
            {children}
          </Main>
        </MainContent>
        <Sidebar>
      {sidebarData.map((element, index) => {
        
        const isActive =
          element.path === '/' // Check if the element's path is the root
            ? location.pathname === '/' ||
              location.pathname.includes('/dashboard') // If it's the root, check if the current path is also root
            : location.pathname.startsWith(element.path);

        return (
          <SidebarItem
            text={element.text}
            icon={element.icon}
            active={isActive}
            link={element.path}
            key={index}
          />
        );
      })}
    </Sidebar>
      </FlexContainer>
    </Container>
  );
};

export default MainLayout;
