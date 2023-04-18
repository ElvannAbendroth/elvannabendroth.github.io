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
        <Section label="Hero" className="hero">
          <Hero />
        </Section>
        <div id="about"></div>
        <Section label="About" className="about">
          <About />
        </Section>
        {/* <div id="projects"></div>
        <Section label="Projects" className="projects">
          <Projects />
        </Section> */}

        <div id="contact"></div>
        <Section label="Contact" className="contact">
          <Contact setNotification={setNotification} />
        </Section>
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

function Section({ label, className, children }) {
  return (
    <section className={className}>
      <div className="content-wrapper">
        {label != 'Hero' ? (
          <h2 style={{ textAlign: 'center' }}>{label}</h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
