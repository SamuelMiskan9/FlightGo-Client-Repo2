import React from 'react'
import { CNavGroup, CNavItem } from '@coreui/react'
import { FiGrid } from "react-icons/fi";
const _nav = [
  
  {
    component: CNavGroup,
    name: 'CUSTOMER',
    to: '/',
    icon: <FiGrid className='w-6 mx-6 w-25'/>,
    items: [
      {
        component: CNavItem,
        name: 'List Order',
        to: '/listorder',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'TICKET LISITNG',
    to: '/',
    icon: <FiGrid className='w-6 mx-6 w-25'/>,
    items: [
      {
        component: CNavItem,
        name: 'Ticket Schedule',
        to: '/ticketschedule',
      },
    ],
  },
  
]

export default _nav
