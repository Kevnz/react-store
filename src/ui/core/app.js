import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'
import './app.css'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>React Store</h1>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
