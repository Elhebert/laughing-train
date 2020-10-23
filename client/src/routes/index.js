import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Login from './Login'
// import Dashboard from './Dashboard'
import Loadable from 'react-loadable'

const Loading = () => <p>Loading..</p>

const Login = Loadable({
  loader: () => import('./Login' /* webpackChunkName: 'Login' */),
  loading: Loading,
})

const Dashboard = Loadable({
  loader: () => import('./Dashboard' /* webpackChunkName: 'Dashboard' */),
  loading: Loading,
})

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dasboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
    </Switch>
  )
}

export default App
