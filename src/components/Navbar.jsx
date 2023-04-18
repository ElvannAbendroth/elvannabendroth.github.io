import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import styles from './Navbar.module.css'
import Button from './Button'

export default function Navbar({ executeScroll }) {
  return (
    <>
      <nav className={styles.root}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            executeScroll('top')
          }}
        >
          <div
            className={` ${styles.logo} title text-primary`}
          >
            <FontAwesomeIcon icon={faSolid.faGamepad} />{' '}
            Oodri.dev
          </div>
        </a>
        <ul role="list" className={styles.navLinks}>
          {/* <li>
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                executeScroll('about')
              }}
            >
              About
            </a>
          </li> */}
          {/* <li>
            <a
              onClick={e => {
                e.preventDefault()
                executeScroll('projects')
              }}
              href="#projects"
            >
              Projects
            </a>
          </li> */}
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
            <Button
              onClick={() => executeScroll('contact')}
              variant="outlined"
              color="primary"
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
