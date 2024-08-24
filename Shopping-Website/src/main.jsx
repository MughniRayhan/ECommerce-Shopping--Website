import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Hero from './Components/Hero/Hero.jsx';
import Products from './Components/Products/Products.jsx';
import Home from './Components/Home/Home.jsx';
import SingleProducts from './Components/Products/SingleProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProducts/>,
      },
     
    ],
    
     
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
