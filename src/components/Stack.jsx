import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'
import styles from './Stack.module.css'
import Button from './Button'
import { Section } from '../App'

export default function Stack() {
  return (
    <Section>
      <h2 style={{ textAlign: 'center' }}>Stack</h2>
      <div className={styles.root}>
        <p className={styles.text}>
          Here's the stack I work with
        </p>
      </div>
    </Section>
  )
}
