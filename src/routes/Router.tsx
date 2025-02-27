import App from '@/App';
import AdminDashboardLayout from '@/components/layout/AdminDashboardLayout';
import UserDashboard from '@/components/layout/UserDashboard';
import About from '@/pages/About';
import AllOrders from '@/pages/AdminDashboard/orderManagement/AllOrders';
import Overview from '@/pages/AdminDashboard/Overview';
import AllProducts from '@/pages/AdminDashboard/ProductManagement/AllProducts';
import AllUser from '@/pages/AdminDashboard/userManagement/AllUser';
import MyOder from '@/pages/AdminDashboard/userManagement/MyOrder';
import ProfileSettings from '@/pages/AdminDashboard/userManagement/ProfileSettings';
import AllProductsPage from '@/pages/AllProductPage';
import CardDetails from '@/pages/Card/CardDetails';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import ImageUpload from '@/pages/ImageUpload';
import Login from '@/pages/Login';
import PaymentReturn from '@/pages/Payment';
import Register from '@/pages/Register';
import Service from '@/pages/Services';
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
        element: <AllOrders />,
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
