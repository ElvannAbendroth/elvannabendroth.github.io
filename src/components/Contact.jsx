import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Send me a message to get in touch!
      </p>

      <form
        className={styles.form}
        action="/action_page.php"
      >
        <div className={styles.inputGroup}>
          <label
            className={`${styles.icon} darker`}
            htmlFor="name"
          >
            <FontAwesomeIcon icon={faSolid.faUser} />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          ></input>
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.icon} darker`}
            htmlFor="email"
          >
            <FontAwesomeIcon icon={faSolid.faAt} />
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.icon} darker`}
            htmlFor="subject"
          >
            <FontAwesomeIcon icon={faSolid.faTag} />
          </label>
          <input
            type="text"
            id="email"
            name="subject"
            placeholder="Subject"
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.icon} darker`}
            htmlFor="message"
          >
            <FontAwesomeIcon icon={faSolid.faMessage} />
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Type your message..."
          />
        </div>
        <div>
          <button
            className="button button-secondary"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <img
        src="assets/overlay-1.svg"
        className={styles.svgBottom}
      />
    </div>
  )
}
