import React from 'react'
import { Router } from '@reach/router'
import Cart from '../components/cart-indicator'
import Container from './container'
import styles from './app.css'
import '../index.css'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))
const Checkout = React.lazy(() => import('../features/cart'))
export default function App() {
  return (
    <Container>
      <div className={styles.container}>
        <Cart />
        <h1>
          <img alt="React Store logo" src="/logo.png" className={styles.logo} />
          React Store
        </h1>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
            <Checkout path="/checkout" />
          </Router>
        </React.Suspense>
      </div>
    </Container>
  )
}
