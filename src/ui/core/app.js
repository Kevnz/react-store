import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'
import styles from './app.css'
import '../index.css'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          <img alt="React Store logo" src="/logo.png" className={styles.logo} />
          React Store?
        </h1>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </React.Suspense>
      </div>
    )
  }
}
