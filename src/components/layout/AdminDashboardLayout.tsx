import { useCurrentToken } from '@/redux/Features/auth/AuthSlice';
import { useAppSelector } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { useState } from 'react';
import { BiBorderAll } from 'react-icons/bi';
import { FaHome, FaRegUserCircle, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { AiOutlineProduct } from 'react-icons/ai';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { TUser } from '../DropDownProfile';

const adminNavItems = [
  {
    title: 'Admin Dashboard',
    icons: <FaHome className="mr-2" />,
    link: '/adminDashboard',
    path: '/adminDashboard',
  },

  {
    title: 'All Products',
    icons: <AiOutlineProduct className="mr-2" />,
    link: 'allProducts',
    path: '/adminDashboard/allProducts',
  },
  {
    title: 'All Users',
    icons: <FaUsers className="mr-2" />,
    link: 'allUsers',
    path: '/adminDashboard/allUsers',
  },
  {
    title: 'All Order',
    icons: <BiBorderAll className="mr-2" />,
    link: 'adminOrder',
    path: '/adminDashboard/adminOrder',
  },
  {
    title: 'Profile Settings',
    icons: <FaRegUserCircle className="mr-2" />,
    link: 'profileSettings',
    path: '/adminDashboard/profileSettings',
  },
];

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const location = useLocation();
  console.log(location);

  const token = useAppSelector(useCurrentToken);
  console.log(token);
  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Bookshelf | Admin Dashboard</title>
        </Helmet>
        {/* Header */}
        <header className="bg-emerald-500 h-16 w-full flex items-center justify-between px-6 text-white shadow-md">
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href="javascript:void(0)"
          >
            <Link to={'/'} className="flex flex-row items-center gap-2">
              <div>
                <a className="relative inline-flex items-center justify-center w-20 h-20  text-lg text-white  lg:-ml-6 rounded-full ">
                  <img src="https://svgsilh.com/svg_v2/158940.svg" alt="" />
                </a>
              </div>
              <div>
                <span className="lg:text-3xl font-semibold">RideOn</span>{' '}
                <span className="lg:text-3xl font-semibold">Wheels</span>
              </div>
            </Link>
          </a>
          {/* Sidebar Toggle Button */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
            ${
              isToggleOpen
                ? 'lg:hidden visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0'
                : ''
            }
          `}
            onClick={() => {
              setIsToggleOpen(!isToggleOpen);
              setIsSidebarOpen(!isSidebarOpen);
            }}
            aria-expanded={isSidebarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/* User Avatar */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-white font-semibold">{user?.email}</span>
          </div>
        </header>

        <div className="flex flex-grow">
          {/* Sidebar */}
          <aside
            className={`bg-emerald-600 text-white lg:static fixed top-0 left-0 z-20 transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 lg:translate-x-0 w-64 lg:w-auto min-h-screen flex flex-col space-y-6 py-6 px-4 shadow-lg`}
          >
            <h2 className="text-lg font-semibold">Menu</h2>
            <ul className="space-y-4">
              {adminNavItems.map((item, index) => (
                <li key={index + 1}>
                  <Link
                    to={item?.link}
                    className={`flex items-center py-2 px-4 rounded-lg transition ${
                      location?.pathname === item?.path
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg scale-105' // Active
                        : 'hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    <button className="flex items-center gap-2">
                      {item?.icons}
                      <span className="font-medium">{item?.title}</span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
