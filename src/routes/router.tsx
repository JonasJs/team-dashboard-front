import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../pages/layout';
import { HomePage } from '../pages/Home/Home.page';
import { NotFound } from '../pages/NotFound/NotFound.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <HomePage />,
      },
    ],
  },
]);
