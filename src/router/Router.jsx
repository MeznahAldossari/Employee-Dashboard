import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Errorpage from '../pages/Errorpage';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement: <Errorpage />,
        },
        {
            path: "/profile/:id",
            element: <Profile />,

        }
      ]);
  return (
    
        <RouterProvider router={router} />

    
  )
}

export default Router
