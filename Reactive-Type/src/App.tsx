import Home from '@/pages/home/Home';
import ErrorEle from '@/pages/ErrorEle';
import Product from '@/pages/Product';
import Layout from '@/pages/Layout';
import Item from '@/pages/items/Item';
import NewEventPage from '@/pages/NewEventPages';
import EditEventPage from '@/pages/EditEventPages';

import { starWarApi } from '@/pages/NewEventPages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const Router = createBrowserRouter([
    // { path: '/', element: <Home /> },
    // { path: '/product', element: <Product /> },

    //# layout with RR
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorEle />, // Fallback error handling page
      children: [
        // Relative path
        { path: '', element: <Home /> },
        // { path: 'product', element: <Product /> ,},
        { path: 'items/:itemId', element: <Item /> }, //Dynamic and nested Routes
        //Fetching star war api data
        {
          path: 'items/new',
          element: <NewEventPage />,
          loader: starWarApi, // loading data
        },
        { path: 'items/:someId/edit', element: <EditEventPage /> },
      ],
    },
    {
      path: '/product',
      errorElement: <ErrorEle />,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
