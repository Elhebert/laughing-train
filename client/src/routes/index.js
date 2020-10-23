import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from '../components/Loader'

const Login = Loadable({
  loader: () => import('./Login' /* webpackChunkName: 'Login' */),
  loading: Loader,
})

const Dashboard = Loadable({
  loader: () => import('./Dashboard' /* webpackChunkName: 'Dashboard' */),
  loading: Loader,
})

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
    </Switch>
  )
}

export default App
