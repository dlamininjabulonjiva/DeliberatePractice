import React from 'react'
import { Link } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material'
import styled from 'styled-components'

const DrawerContainer = styled.div`
  width: 240px;
  background-color: #000000;
  height: 100vh;
`
const DrawerStyled = styled(Drawer)`
  & .MuiDrawer-paper {
    background-color: #000000;
    color: white;
  }
`
const Navigation: React.FC = () => {
  return (
    <DrawerStyled variant="permanent" anchor="left">
      <DrawerContainer>
        <Toolbar>
          <Typography variant="h6">Rugby Club App</Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/players">
            <ListItemText primary="Players" />
          </ListItemButton>
          <ListItemButton component={Link} to="/team-setup">
            <ListItemText primary="Team Setup" />
          </ListItemButton>
        </List>
      </DrawerContainer>
    </DrawerStyled>
  )
}

export default Navigation