import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Users from './components/Users'
import { UserContext } from './Context'
import Logout from './components/Logout'
import NotFound from './components/NotFound'

export default function App() {
  const { logindata, mockerr } = useContext(UserContext)
  const [login] = logindata
  const [mock] = mockerr
  return (
    <div>
      <Router>
        <Header />
        {
          mock === 404 ? <h5 className="text-center text-danger m-3">Mock Server Not Started</h5> :
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/users">
                {
                  login ?
                    login.access ?
                      <Users />
                      :
                      <h5 className="text-primary m-5 text-center">Login to Continue...</h5>
                    :
                    window.location.reload()
                }
              </Route>
              <Route path="/logout"><Logout /></Route>
              <Route path="/*"><NotFound /></Route>
            </Switch>
        }
      </Router>
    </div>
  )
}

