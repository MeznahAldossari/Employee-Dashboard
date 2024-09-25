import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
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
