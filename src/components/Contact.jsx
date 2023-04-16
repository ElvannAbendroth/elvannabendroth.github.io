import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import styles from './Contact.module.css'

export default function Contact({ setNotification }) {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    emailjs
      .sendForm(
        'service_zdxp318',
        'template_nch1b3v',
        form.current,
        'zx0BpyPnkUrfspJ6i'
      )
      .then(result => {
        setNotification({
          message: `Your email was sent successfully!!`,
          type: 'success',
        })
      })
      .catch(error => {
        console.log(error.text)
        setNotification({
          message: `Opps, something happened!`,
          type: 'error',
        })
      })
  }

  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Interested in{' '}
        <span className="text-secondary">
          working together
        </span>
        ? <br />
        Send me a message to{' '}
        <span className="text-primary">get in touch</span>!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
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

      <p className={styles.text}>
        Website made with{' '}
        <span className="text-secondary">React</span> and
        designed by{' '}
        <span className="text-primary">Oodri</span>.
      </p>
      <img
        src="assets/overlay-1.svg"
        className={styles.svgBottom}
      />
    </div>
  )
}
