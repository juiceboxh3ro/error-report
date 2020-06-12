import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './route_helpers/PrivateRoute'

import Navbar from './components/Navbar'
import Review from './components/admin/Review'
import Access from './components/user_access/Access'
import AddReport from './components/AddReport'
import ReportList from './components/ReportList'
import Footer from './components/Footer'

import { Container } from './styled'

function App() {
console.groupCollapsed("Want to contribute to this website?")
console.log("Feel free to fork and submit a pull request!")
console.log(`https://github.com/juiceboxh3ro/error-report`)
console.groupEnd()
return (
<Container>
  <Navbar />
  <Switch>
    <PrivateRoute path="/review" component={Review} />
    <Route path="/submit" component={AddReport} />
    <Route path="/login" component={Access} />
    <Route exact path="/" component={ReportList} />
  </Switch>
  <Footer />
</Container>
)};

export default App;
