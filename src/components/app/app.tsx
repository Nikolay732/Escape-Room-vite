import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <MainPage/>,
  }
]);

export function App() {
  return (
    <RouterProvider router={router}/>
  );
}
