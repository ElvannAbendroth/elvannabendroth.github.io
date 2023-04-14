import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root'
import ErrorPage from './error-page'
import * as contactRoute from './routes/contact'
import EditContact, {
  action as editAction,
} from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import Index from './routes/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: rootLoader,
          },
          {
            path: 'contacts',
            loader: () => redirect(`/`),
            errorElement: <ErrorPage />,
          },
          {
            path: 'contacts/:contactId',
            element: <contactRoute.default />,
            loader: contactRoute.loader,
            action: contactRoute.action,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactRoute.loader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            loader: contactRoute.loader,
            action: destroyAction,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
