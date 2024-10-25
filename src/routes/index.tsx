import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'containers/dashboard';
import Login from 'containers/auth/login';
import MainLayout from 'components/layout/page-containers/main-layout';

import ForgetPassword from 'containers/auth/forget-password';
import ResetPassword from 'containers/auth/reset-password';
import CheckMail from 'containers/auth/check-email';
import UserList from 'containers/users/user-list';
import HomeChef from 'containers/home-chefs/home-chef-list';

import Retailer from 'containers/retailer/listing';
import ManageState from 'containers/manage-state';
import Categories from 'containers/categories';
import Ingredients from 'containers/Ingredients';
import UsersView from 'containers/users/view';

import PrintView from 'containers/users/print-view';
import Detail from 'containers/users/detail';
import HomeChefView from 'containers/home-chefs/view/index' 
import ViewReceipe from 'containers/home-chefs/view-receipe';
import RetailerView from 'containers/retailer/view';

import Banners from 'containers/banners';
import Setting from 'containers/setting/password';
import CMS from 'containers/setting/CMS';
import ProtectedRoutes from 'containers/protected-routes';
import Notification from 'containers/notifications';
import IngredientDetail from 'containers/Ingredients/ingrident-detail';

interface RouteItem {
  path: string;
  element: React.ReactNode;
  hideLayout?: boolean;
}

const AppRoutes: FC = () => {
  const routes: RouteItem[] = [
    {
      path: '/login',
      element: <Login />,
      hideLayout: true,
    },
    {
      path: '/forget-password',
      element: <ForgetPassword />,
      hideLayout: true
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
      hideLayout: true
    },
    {
      path: '/sent-message',
      element: <CheckMail />,
      hideLayout: true
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/categories',
      element: <Categories />,
    },
    {
      path: '/ingredient',
      element: <Ingredients />,
    },
    {
      path: '/ingredient/detail',
      element: <IngredientDetail />,
    },
    {
      path: '/user',
      element: <UserList />,
    },
    {
      path: '/user/view',
      element: <UsersView />,
    },
    {
      path: '/user/view/print',
      element: <PrintView />,
    },
    
    {
      path: '/user/view/detail',
      element: <Detail />,
    },
    {
      path: '/home-chef',
      element: <HomeChef />,
    },
    {
      path: '/home-chef/view',
      element: <HomeChefView />,
    },
    {
      path: '/home-chef/view/detail',
      element: <Detail />,
    },
    {
      path: '/home-chef/view-receipe',
      element: <ViewReceipe />,
    },
    {
      path: '/retailer',
      element: <Retailer />,
    },
    {
      path: '/retailer/view',
      element: <RetailerView />,
    },
    {
      path: '/retailer/view/print',
      element: <PrintView />,
    },
    {
      path: '/manage-state',
      element: <ManageState />,
    },
    {
      path: '/manage-state/print',
      element: <PrintView />,
    },
    {
      path: '/banners',
      element: <Banners />,
    },
    {
      path: '/dashboard/setting',
      element: <CMS />,
    },
    {
      path: '/dashboard/profile',
      element: <Setting />,
    },
    {
      path: '/dashboard/notification',
      element: <Notification />,
    },
  ];

  return (
    <Routes>
      {routes.map(({path , hideLayout , element}, index) => (
        <Route
          key={index}
          path={path}
          element={hideLayout ? element : <MainLayout><ProtectedRoutes>{element}</ProtectedRoutes></MainLayout>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
