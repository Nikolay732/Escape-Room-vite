import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage } from '../../pages/login-page/login-page';
import { PrivateRoute } from '../private-route/private-route';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <MainPage/>,
  },
  {
    path: AppRoute.Login,
    element: (
      <PrivateRoute>
        <LoginPage/>
      </PrivateRoute>
    ),
  }
]);

export function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}
