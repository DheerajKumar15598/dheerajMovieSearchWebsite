import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Movie from './Movie';

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "*",
          element: <Error/>
        },
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "movie/:id",
          element: <SingleMovie/>
        },
        {
          path: "movie",
          element: <Movie/>
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
