import React, { useState } from 'react'
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as faSolid from '@fortawesome/free-solid-svg-icons'
// import * as faBrand from '@fortawesome/free-brands-svg-icons'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Notification } from './components/Notification'
import { useExpiringState } from './hooks/useExpiringState'
import Navbar from './components/Navbar'

export default function App() {
  const [notification, setNotification] =
    useExpiringState(null)

  const executeScroll = target => {
    const element = document.getElementById(target)
    element.scrollIntoView()
  }

  return (
    <>
      <Notification notification={notification} />
      <div id="top"></div>
      <Header>
        <Navbar executeScroll={executeScroll} />
      </Header>
      <Main>
        <Hero />
        <div id="about"></div>
        <About />
        <div id="projects"></div>
        <Projects />
        <div id="contact"></div>
        <Contact setNotification={setNotification} />
      </Main>
      <img className="svg-top" src="assets/overlay-1.svg" />
    </>
  )
}

function Header({ children }) {
  return <header>{children}</header>
}

function Main({ children }) {
  return <main>{children}</main>
}

export function Section({ className, children }) {
  return (
    <section className={className}>
      <div className="content-wrapper">{children}</div>
    </section>
  )
}
