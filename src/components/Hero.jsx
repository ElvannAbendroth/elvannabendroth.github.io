import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import styles from './Hero.module.css'
import Button from './Button'

export default function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.col}>
        <h1>
          Hei, I'm{' '}
          <span className="text-secondary">Oodri</span>!
        </h1>
        <p>
          I'm a{' '}
          <span className="text-secondary">Full-stack</span>{' '}
          developer with a love for design and playing
          music.
        </p>
        <ul role="list" className={styles.list}>
          <li>📍 Helsinki, Finland</li>
          <li>🌿 React, Node.js, MongoDB</li>
          <li>🛒 Wordpress, Shopify</li>
        </ul>
        <div>
          <Button
            label="Visit my Github"
            icon={
              <FontAwesomeIcon
                icon={faBrand.faGithub}
                size="lg"
              />
            }
            style="outline"
            color="primary"
            onClick={() =>
              window.open(
                'https://github.com/ElvannAbendroth'
              )
            }
          />
        </div>
      </div>

      <div className={styles.col}>
        <img
          className={styles.picture}
          src="https://cdn.midjourney.com/9cd37d22-78e1-4802-be0d-732f1df2f25f/0_1.png"
          alt=""
        />
      </div>
    </div>
  )
}
