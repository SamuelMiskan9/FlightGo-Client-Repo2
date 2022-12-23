import React from 'react'

const ListOrder = React.lazy(() => import('./views/base/ListOrder/ListOrder'))
const EditData = React.lazy(() => import('./views/buttons/EditData/EditData'))
const TicketSchedule = React.lazy(() => import('./views/buttons/TicketSchedule/TicketSchedule'))
const AddNewData = React.lazy(() => import('./views/base/AddNewData/AddNewData'))
const UpdateOrder = React.lazy(() => import('./views/base/ListOrder/UpdateOrder'))
const routes = [
  { path: '/listorder', exact: true, name: 'List Order Ticket' },
  { path: '/listorder', name: 'List Order', element: ListOrder },
  { path: '/addnewdata', name: 'Add New Data', element: AddNewData },
  { path: '/updateorder/:id', name:'Update Order', element: UpdateOrder},
  { path: '/ticketschedule', name: 'Ticket Schedule', element: TicketSchedule },
  { path: '/editdata', name: 'Edit Data', element: EditData },
]

export default routes
