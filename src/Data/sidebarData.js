import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoMdHelpCircle } from 'react-icons/io'
import { CgNotes } from 'react-icons/cg'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <CgNotes />,
    cName: 'nav-text'
  },
 
];