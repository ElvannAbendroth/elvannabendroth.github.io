import React from 'react'
import {
  createBrowserRouter,
  redirect,
} from 'react-router-dom'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root'
import ErrorPage from './routes/404'
import Contact, * as contactRoute from './routes/contact'
import EditContact, {
  action as editAction,
} from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import Index, {
  loader as indexLoader,
} from './routes/index'

export const router = createBrowserRouter([
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
            loader: indexLoader,
          },
          {
            path: 'contacts',
            loader: () => redirect(`/`),
            errorElement: <ErrorPage />,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
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
