import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import notificationIcon from 'assets/images/notification-icon.svg';
import dropdownButton from 'assets/images/dropdown.svg'
import {
  ProfileDropdownContainer,
  NavSection,
  Container,
  NotificationBadge,
  NotificationButton,
  ProfileContainer,
  DropdownItem,
  Divider,
  Icon
} from './styles'

import useComponentVisible from 'hooks/click-outside-hook';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import { RootState, dispatch } from 'store';
import { setSideBarClosed, setSideBarOpened } from 'store/user-slice';
import { useSelector } from 'react-redux';
import { ProfileDTO } from 'utils/helpers/models/profile.dto';
import dummyProfile from 'assets/images/dummy-profile-pic.png'


const Navbar: React.FC = () => {
  const { isSidebarExpanded } = useSelector((state:RootState) => state.user);
  const navigate = useNavigate();
  const [adminProfile , setAdminProfile] = useState<ProfileDTO>()
  const {
    isComponentVisible: isNotificationVisible,
    ref: notificationRef,
    setIsComponentVisible: setIsNotificationComponentVisible,
  } = useComponentVisible(false);
  const {
    isComponentVisible: profileDropDownOpened,
    ref: profileDropdownRef,
    setIsComponentVisible: setProfileDropdownOpened,
  } = useComponentVisible(false);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleExpandSidebar = () => {
    if (isSidebarExpanded) {
      dispatch(setSideBarClosed());
    } else {
      dispatch(setSideBarOpened());
    }
  };

  const storedProfile:any =(localStorage.getItem('adminProfile'));

useEffect(() => {
  setAdminProfile(JSON.parse(storedProfile)?.user)
} , [storedProfile])

  return (
    <Container className='no-print'>
      <div className='navbar'>
        <div className='title'>
      <div>
      <Icon
        size={30}
        color="#000000"
        onClick={handleExpandSidebar}
      />
    </div>
          <h1>Hello {adminProfile?.name} 👋🏼,</h1>
        </div>
      <NavSection>
        <div onClick={()=>navigate(siteRoutes.notification)}>
          <NotificationButton>
            <NotificationBadge>1</NotificationBadge>
            <img src={notificationIcon} alt='img' />
          </NotificationButton>
        </div>
        <ProfileContainer onClick={() => setProfileDropdownOpened(!profileDropDownOpened)}>
          <img className='profile-image' src={adminProfile?.image ? adminProfile?.image : dummyProfile } alt="avatar" />
          <div>
          <h5>{adminProfile?.name}</h5>
          <p>{adminProfile?.userRole}</p>
          </div>
          <img src={dropdownButton} />
        </ProfileContainer>
        <div>
          {profileDropDownOpened && (
        <ProfileDropdownContainer ref={profileDropdownRef}>
          <DropdownItem
            onClick={() => {
              setProfileDropdownOpened(false);
              navigate(siteRoutes.profile);
            }}
          >
            Profile
          </DropdownItem>
          <Divider />
          <DropdownItem
            onClick={() => {
              setProfileDropdownOpened(false);
              navigate(siteRoutes.setting);
            }}
          >
            Settings
          </DropdownItem>
          <Divider />
          <DropdownItem onClick={logout}>
            Logout
          </DropdownItem>
        </ProfileDropdownContainer>
      )}
      </div>
      </NavSection>
      </div>

    </Container>
  );
};

export default Navbar;
