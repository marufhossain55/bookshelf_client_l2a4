import App from '@/App';

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
      <DashboardProtected role="admin">
        {' '}
        <AdminDashboardLayout />
      </DashboardProtected>
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
      <DashboardProtected role="customer">
        {' '}
        <UserDashboard />
      </DashboardProtected>
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
