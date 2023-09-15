import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage } from '../../pages/login-page/login-page';
import { PrivateRoute } from '../private-route/private-route';
import { ContactsPage } from '../../pages/contacts-page/contacts-page';
import { QuestPage } from '../../pages/quest-page/quest-page';
import { BookingPage } from '../../pages/booking-page/booking-page';

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
    path: AppRoute.Quest,
    element: <QuestPage/>,
  },
  {
    path: AppRoute.Booking,
    element: <BookingPage/>,
  },
]);

export function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}
