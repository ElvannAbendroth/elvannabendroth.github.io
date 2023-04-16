import React from 'react'
import { useState, useRef } from 'react'
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

export default function App() {
  const [notification, setNotification] =
    useExpiringState(null)

  const contactRef = useRef(null)

  const executeScroll = () => {
    contactRef.current.scrollIntoView()
  }

  return (
    <>
      <Notification notification={notification} />
      <Header>
        <a href="#">
          <div className="logo title text-secondary">
            <FontAwesomeIcon icon={faSolid.faGamepad} />{' '}
            Oodri.dev
          </div>
        </a>
        <Navbar executeScroll={executeScroll} />
      </Header>
      <Main>
        <Section label="Hero" className="hero">
          <Hero />
        </Section>

        <Section label="Contact" className="contact">
          <div ref={contactRef}></div>
          <Contact setNotification={setNotification} />
        </Section>
      </Main>
      <img className="svg-top" src="assets/overlay-1.svg" />
    </>
  )
}

function Navbar({ executeScroll }) {
  return (
    <nav>
      <ul role="list" className="nav-links">
        <li>
          <a
            href="https://github.com/ElvannAbendroth"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faBrand.faGithub}
              size="xl"
            />
          </a>
        </li>
        <li className="">
          <a
            href="https://www.behance.net/elvann"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faBrand.faBehance}
              size="xl"
            />
          </a>
        </li>
        <li>
          <a href="#contact" className="cta">
            <button
              onClick={executeScroll}
              className="button button-secondary"
            >
              Contact
            </button>
          </a>
        </li>
      </ul>
    </nav>
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
