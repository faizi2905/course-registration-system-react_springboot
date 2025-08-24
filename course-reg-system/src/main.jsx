/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import GetCouses from './GetCourses.jsx'
import GetEnrolled from './GetEnrolled.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import AllComponent from './AllComponent.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login />,
    errorElement:<NotFound/>
  },
  {
    path:'/allComponent',
    element: <AllComponent/>,
    errorElement:<NotFound/>
  },
  {
    path:'/courses',
    element:<GetCouses/>,
    errorElement:<NotFound/>
  },
  {
    path:'enrolled',
    element:<GetEnrolled/>,
    errorElement:<NotFound/>
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<NotFound/>
  },
  {
    path:'*',
    element:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
 */ 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import GetCouses from './GetCourses.jsx'
import GetEnrolled from './GetEnrolled.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import AllComponent from './AllComponent.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import AddUser from './AddUser.jsx'
import NotAccess from './NotAccess.jsx'

// 🔑 Wrapper to protect Admin-only routes
function AdminRoute({ children }) {
  const role = localStorage.getItem("role");
  console.log("Stored role in localStorage:", role);

  // accept both ADMIN and ROLE_ADMIN
  if (role !== "ROLE_ADMIN" && role !== "ADMIN") {
    return <Navigate to="/notaccess" replace />;
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/allComponent',
    element: <AllComponent />,
    errorElement: <NotFound />
  },
  {
    path: '/courses',
    element: <GetCouses />,
    errorElement: <NotFound />
  },
  {
    path: '/enrolled',
    element: <GetEnrolled />,
    errorElement: <NotFound />
  },
  {
    path: '/notaccess',
    element: <NotAccess/>,
    errorElement: <NotFound />
  },
  {
    path:'/add',
    element: (
      <AdminRoute>
    <AddUser/>
    </AdminRoute>
    ),
    errorElement: <NotFound/>
  },
  {
    path: '/register',
    element: (
      <AdminRoute>
        <Register />
      </AdminRoute>
    ),
    errorElement: <NotFound />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)