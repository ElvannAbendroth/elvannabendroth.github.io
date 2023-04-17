import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import styles from './Navbar.module.css'
import Button from './Button'

export default function Navbar({ executeScroll }) {
  return (
    <>
      <nav className={styles.root}>
        <a href="#">
          <div
            className={` ${styles.logo} title text-secondary`}
          >
            <FontAwesomeIcon icon={faSolid.faGamepad} />{' '}
            Oodri.dev
          </div>
        </a>
        <ul role="list" className={styles.navLinks}>
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
            <Button
              label="Contact"
              // style="outline"
              onClick={() => executeScroll('contact')}
            />
          </li>
        </ul>
      </nav>
    </>
  )
}
