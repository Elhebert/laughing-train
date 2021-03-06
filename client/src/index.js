import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './routes'
import GlobalStyles from './styles/gloabal-styles'
import history from './store/history'

render(
  <Provider store={configureStore()}>
    <GlobalStyles />
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
