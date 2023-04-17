import React from 'react'
import { useRef } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Notification } from './components/Notification'
import { useExpiringState } from './hooks/useExpiringState'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { logDOM } from '@testing-library/react'

export default function App() {
  const [notification, setNotification] =
    useExpiringState(null)

  /* TODO: probably should make those scrolls more maintainable, 
 also for when adding or removing links in the navbar */
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const executeScroll = target => {
    if (target === 'top') {
      topRef.current.scrollIntoView()
    } else if (target === 'about') {
      aboutRef.current.scrollIntoView()
    } else if (target === 'projects') {
      projectsRef.current.scrollIntoView()
    } else if (target === 'contact') {
      contactRef.current.scrollIntoView()
    }
  }

  const clickTest = () => {
    console.log('Hi')
  }

  return (
    <>
      <Notification notification={notification} />
      <div ref={topRef}></div>
      <Header>
        <Navbar executeScroll={executeScroll} />
        {/* <Button
          label="Hi"
          onClick={() => executeScroll('contact')}
        /> */}
      </Header>
      <Main>
        <Section label="Hero" className="hero">
          <Hero />
        </Section>
        <div ref={aboutRef}></div>
        <Section label="About" className="about">
          <About />
        </Section>
        <div ref={projectsRef}></div>
        <Section label="Projects" className="projects">
          <Projects />
        </Section>

        <div ref={contactRef}></div>
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
