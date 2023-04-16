import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as faBrand from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div>
      <p>Send me a message to get in touch!</p>
      <form
        className="contact-form"
        action="/action_page.php"
      >
        <div className="input-container">
          <label className="icon darker" htmlFor="name">
            <FontAwesomeIcon icon={faSolid.faUser} />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          ></input>
        </div>

        <div className="input-container">
          <label className="icon darker" htmlFor="email">
            <FontAwesomeIcon icon={faSolid.faAt} />
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="input-container">
          <label className="icon darker" htmlFor="subject">
            <FontAwesomeIcon icon={faSolid.faTag} />
          </label>
          <input
            type="text"
            id="email"
            name="subject"
            placeholder="Subject"
          />
        </div>

        <div className="input-container">
          <label className="icon darker" htmlFor="message">
            <FontAwesomeIcon icon={faSolid.faMessage} />
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Type your message..."
          />
        </div>

        <button
          className="button button-secondary"
          type="submit"
        >
          Send
        </button>
      </form>

      <img
        src="assets/overlay-1.svg"
        className="svg-bottom"
      />
    </div>
  )
}
