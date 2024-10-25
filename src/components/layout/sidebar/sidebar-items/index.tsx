import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';
import {useNavigate } from 'react-router-dom';
import {SidebarItemContainer , IconContainer ,TextContainer , AlertDot , Tooltip} from './style'

interface SidebarItemProps {
  text: string;
  icon: any;
  active: boolean;
  link: string;
  alert?: boolean;
}



const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, active, link, alert }) => {
  const { isSidebarExpanded } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()
  return (
      <SidebarItemContainer active={active} onClick={()=>(navigate(link))}>
        <IconContainer isSidebarExpanded={isSidebarExpanded}>
            <img src={icon} alt='img'/></IconContainer>
        <TextContainer isSidebarExpanded={isSidebarExpanded}>{text}</TextContainer>
        {alert && <AlertDot isSidebarExpanded={isSidebarExpanded} />}
        {!isSidebarExpanded && <Tooltip>{text}</Tooltip>}
      </SidebarItemContainer>
  );
};

export default SidebarItem;
