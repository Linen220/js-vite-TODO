import React from "react";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./error-page";
import { action as LoginAction } from "./routes/actions/authAction";
import Root from "./pages/Root";
import TaskPage from './pages/Tasks';
import { loader as Rootloader } from "./routes/loaders/rootLoader";
import { loader as TaskLoader } from "./routes/loaders/taskLoader";
import { loader as LoginLoader } from "./routes/loaders/loginLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: Rootloader,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
    loader: LoginLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'actionLogin',
        element: <Login />,
        action: LoginAction,
        errorElement: <ErrorPage />,
      }
    ]
  },
  {
    path: 'task',
    loader: TaskLoader,
    element: <TaskPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
