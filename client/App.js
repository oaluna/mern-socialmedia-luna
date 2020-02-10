import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { deepOrange, blue } from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#AEDBEE',
    main: '#315788',
    dark: '#1F3E6A',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#DBCDD0',
    main: '#9B6A6C',
    dark: '#5F5449 ',
    contrastText: '#000',
  },
    openTitle: deepOrange['600'],
    protectedTitle: blue['800'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
