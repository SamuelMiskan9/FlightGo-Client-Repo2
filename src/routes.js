import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListOrder = React.lazy(() => import('./views/base/ListOrder/ListOrder'))
const EditData = React.lazy(() => import('./views/buttons/EditData/EditData'))
const TicketSchedule = React.lazy(() => import('./views/buttons/TicketSchedule/TicketSchedule'))
const AddNewData = React.lazy(() => import('./views/base/AddNewData/AddNewData'))

const routes = [
  { path: '/listorder', exact: true, name: 'List Order Ticket' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/listorder', name: 'List Order', element: ListOrder },
  { path: '/addnewdata', name: 'Add New Data', element: AddNewData },

  { path: '/ticketschedule', name: 'Ticket Schedule', element: TicketSchedule },
  { path: '/editdata', name: 'Edit Data', element: EditData },
  
]

export default routes
