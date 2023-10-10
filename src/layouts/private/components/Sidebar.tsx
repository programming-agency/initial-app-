import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
 
import DashboardIcon from './icons/DashboardIcon'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from '../../../constants/paths'

export default function Sidebar() {

  const location = useLocation()
  const pathname = location.pathname;

  return (
    <Box>
       <List>
          <Link to={Paths.DASHBOARD}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.DASHBOARD && 'border-r-[2px]'}`}>Dashboard</Box>} />
              </ListItemButton>
            </ListItem>      
          </Link>
            
        </List>
    </Box>
  )
}
