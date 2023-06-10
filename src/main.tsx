import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import './index.css'

const theme = createTheme({
  typography: { fontFamily: ['Outfit', 'sans-serif'].join(',') },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
