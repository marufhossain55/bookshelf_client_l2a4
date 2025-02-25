import { TUser } from '@/components/DropDownProfile';
import { useCurrentToken } from '@/Redux/Features/Auth/AuthSlice';
import { useAppSelector } from '@/Redux/hooks';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyToken } from './verifyToken';

const DashboardProtected = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }

  if (!user?.email) {
    return <Navigate to={'/login'}></Navigate>;
  }

  if (user?.role !== role) {
    return (
      <Navigate
        to={user?.role === 'admin' ? '/adminDashboard' : '/userDashboard'}
      ></Navigate>
    );
  }
  return children;
};

export default DashboardProtected;
