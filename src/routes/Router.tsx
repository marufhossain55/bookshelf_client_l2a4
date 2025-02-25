import App from '@/App';
import Error from '@/pages/Error';

import ProtectedDashboard from '@/utils/ProtectedDashboard';
import ProtectedRoutes from '@/utils/ProtectedRoutes';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allProduct',
        element: <AllProductsPage></AllProductsPage>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: (
          <ProtectedRoutes>
            {' '}
            <Checkout></Checkout>
          </ProtectedRoutes>
        ),
      },
      {
        path: '/imageUpload',
        element: <ImageUpload></ImageUpload>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/response',
    element: <PaymentReturn />,
  },
  {
    path: '/adminDashboard',
    element: (
      <ProtectedDashboard role="admin">
        <AdminDashboardLayout />
      </ProtectedDashboard>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },

      {
        path: 'allProducts',
        element: <AllProducts />,
      },
      {
        path: 'allUsers',
        element: <AllUser />,
      },
      {
        path: 'profileSettings',
        element: <ProfileSettings />,
      },
      {
        path: 'adminOrder',
        element: <AllOrder />,
      },
    ],
  },
  {
    path: '/userDashboard',
    element: (
      <ProtectedDashboard role="customer">
        <UserDashboard />
      </ProtectedDashboard>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'myOrder',
        element: <MyOder />,
      },
      {
        path: 'profileSettings',
        element: <ProfileSettings />,
      },
    ],
  },
]);

export default router;
