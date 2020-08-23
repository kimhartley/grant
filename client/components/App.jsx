import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LandingPage from './LandingPage.jsx'
import BioPage from './BioPage'
import OtherPage from './OtherPage'

export class App extends React.Component {

  render() {

    return (
      <Router>

        <div className="screen">

          <div className="card">
            <div className="form-inline my-2 my-lg-0">
              <Link to='/' className="">
                <h1 className="title is-1">Home</h1>
              </Link>
              
            </div>
          </div>
          <br></br>
          <div className='card'>
           
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/bio" component={BioPage} />
            <Route exact path="/other" component={OtherPage} />
            
          </div>

        </div>
      </Router>
    )
  }
}


export default connect()(App)