import React from 'react'
import { Typography, Box, Paper, Button } from '@mui/material'
import styled from 'styled-components'

const DashboardContainer = styled(Box)`
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px
`

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Typography variant="h2" color="primary">
        Amanzimtoti Rugby Club Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', width: '99%' }}>
        <Typography variant="h6">Welcome to the Club Dashboard!</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Test Button
        </Button>
      </Paper>
    </DashboardContainer>
  )
}

export default Dashboard