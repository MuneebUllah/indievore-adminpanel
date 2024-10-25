
import  { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: FC<any> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={'/login'} replace/>
  }
  return children
};

export default ProtectedRoutes;
