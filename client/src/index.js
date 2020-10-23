import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducers'
import App from './components/App'
import GlobalStyles from './styles/gloabal-styles'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
)

