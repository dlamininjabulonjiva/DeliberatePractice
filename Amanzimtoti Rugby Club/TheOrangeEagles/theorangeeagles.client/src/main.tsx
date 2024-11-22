import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </StyledThemeProvider>
  </MuiThemeProvider>
)
