import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        // loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
);
