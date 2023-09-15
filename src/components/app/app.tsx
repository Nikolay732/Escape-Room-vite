import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage } from '../../pages/login-page/login-page';
import { PrivateRoute } from '../private-route/private-route';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';
import { QuestPage } from '../../pages/quest-page/quest-page';

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
  },
  {
    path: AppRoute.Contacts,
    element: <ContactsPage/>,
  },
  {
    path: `${AppRoute.Quest}/:questId`,
    element: <QuestPage/>
  },
]);

export function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}
