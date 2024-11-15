import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Navigation from './components/Navigation'
import Players from './pages/dashboard/Players'
import TeamSetup from './pages/dashboard/TeamSetup'
import { Box, Toolbar } from '@mui/material'
import TopBar from './components/TopBar'

const drawerWidth = 240

function App() {
  return (
    <Router>
      <TopBar />
      <Navigation />
      <Box
        component="main"
        sx={{
          marginLeft: `${drawerWidth}px`,
          marginTop: '30px',
          paddingLeft: 3,
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/players" element={<Players />} />
          <Route path="/team-setup" element={<TeamSetup />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
