import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import NavBar from './NavBar';
import Footer from './Footer';
import Error from './Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <NavBar/>
        <Outlet/>
        <Footer/>
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
