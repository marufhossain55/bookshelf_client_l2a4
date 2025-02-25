import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router.tsx';
import { Toaster } from 'sonner';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>
);
