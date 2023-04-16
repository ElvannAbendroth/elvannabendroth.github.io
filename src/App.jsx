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

export default function App() {
  const [notification, setNotification] =
    useExpiringState(null)

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
  return (
    <>
      <Notification notification={notification} />
      <div ref={topRef}></div>
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

function Navbar({ executeScroll }) {
  return (
    <nav>
      <ul role="list" className="nav-links">
        <li>
          <a
            href="#about"
            onClick={() => executeScroll('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => executeScroll('projects')}
            href="#projects"
          >
            Projects
          </a>
        </li>
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
          <a
            onClick={() => executeScroll('contact')}
            href="#contact"
            className="cta"
          >
            <button className="button button-secondary">
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
