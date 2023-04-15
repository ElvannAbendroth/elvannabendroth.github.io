import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <div className="logo title text-secondary">
            <FontAwesomeIcon icon={faSolid.faGamepad} />{' '}
            Oodri.dev
          </div>
        </a>
        <Navbar />
      </Header>
      <Main>
        <Section label="Hero" className="hero">
          <Hero />
        </Section>

        <Section label="About" className="about">
          <About />
        </Section>

        <Section label="Projects" className="projects">
          <p>Here are my projects</p>
        </Section>

        <Section label="Contact" className="contact">
          <Contact />
        </Section>
      </Main>

      <img className="svg-top" src="assets/overlay-1.svg" />
    </>
  )
}

function Navbar() {
  return (
    <nav>
      <ul role="list" className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="">
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
        <li>
          <a href="#contact" className="cta">
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
        <div>
          {label != 'Hero' ? <h2>{label}</h2> : null}
          {children}
        </div>
      </div>
    </section>
  )
}
