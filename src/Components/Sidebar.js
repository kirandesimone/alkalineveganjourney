import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from '../Data/sidebarData'
import '../App.css'
import theme from '../theme'
import { IconContext } from 'react-icons'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    logo: {
        flexGrow: 1,
        paddingLeft: "3%",
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: "1.8rem"
    },
})

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();

  return (
    <>
      <IconContext.Provider value={{ color: '#E8DFE0' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Typography variant="h1" className={classes.logo}>
            AlkalineVeganJourney
        </Typography>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}