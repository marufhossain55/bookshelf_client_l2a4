import { verifyToken } from '@/utils/verifyToken';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import ProfileDropDown from './DropDownProfile';
import { useCurrentToken } from '@/redux/Features/auth/AuthSlice';
import { useAppSelector } from '@/redux/hooks';

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const token = useAppSelector(useCurrentToken);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      // setIsLoggedIn(true);
    }
  }, []);
  let isUserLogin;
  if (token) {
    isUserLogin = verifyToken(token as string);
  }

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
  };

  const item = useAppSelector((state) => state.product?.selectedItems);

  return (
    <>
      <header className="  sticky top-0 z-10 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
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
                    <img
                      src="https://i.etsystatic.com/23559605/r/il/5ce8a1/2846155855/il_fullxfull.2846155855_ijzs.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <span className="lg:text-3xl font-semibold">Book</span>{' '}
                  <span className="lg:text-3xl font-semibold">Shelf</span>
                </div>
              </Link>
            </a>

            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                  : ''
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
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

            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-emerald-500 underline decoration-2 underline-offset-4'
                          : 'text-slate-700 hover:text-emerald-500'
                      }
                      to={'/'}
                    >
                      Home
                    </NavLink>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-emerald-500 underline decoration-2 underline-offset-4'
                          : 'text-slate-700 hover:text-emerald-500'
                      }
                      to={'/allProduct'}
                    >
                      All Products
                    </NavLink>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-emerald-500 underline decoration-2 underline-offset-4'
                          : 'text-slate-700 hover:text-emerald-500'
                      }
                      to={'/about'}
                    >
                      About
                    </NavLink>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-emerald-500 underline decoration-2 underline-offset-4'
                          : 'text-slate-700 hover:text-emerald-500'
                      }
                      to={'/service'}
                    >
                      Service
                    </NavLink>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-emerald-500 underline decoration-2 underline-offset-4'
                          : 'text-slate-700 hover:text-emerald-500'
                      }
                      to={'/cart'}
                    >
                      <div className="relative">
                        <FaCartPlus />
                        <div className="absolute -top-3 -right-3">
                          <p>{isUserLogin ? item : 0}</p>
                        </div>
                      </div>
                    </NavLink>
                  </span>
                </a>
              </li>
            </ul>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <div className="flex items-center justify-center min-h-screen">
                {isUserLogin ? (
                  <ProfileDropDown></ProfileDropDown>
                ) : (
                  <Link to="/login">
                    {' '}
                    <button
                      onClick={handleLogin}
                      className="focus:text-emerald-600 bg-emerald-500 text-white py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
