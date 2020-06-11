import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './route_helpers/PrivateRoute'

import Navbar from './components/Navbar'
import Review from './components/review_reports/Review'
import Login from './components/Login'
import AddReport from './components/AddReport'
import ReportList from './components/ReportList'
import Footer from './components/Footer'

import { Container } from './styled'

function App() {
return (
<Container>
  <Navbar />
  <Switch>
    <PrivateRoute path="/review" component={Review} />
    <Route path="/submit" component={AddReport} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={ReportList} />
  </Switch>
  <Footer />
</Container>
)};

export default App;
