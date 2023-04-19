import styles from './About.module.css'
import { Section } from '../App'

export default function About() {
  return (
    <Section className="bg-bg">
      <h2 style={{ textAlign: 'center' }}>About</h2>
      <div className={styles.root}>
        <div className={styles.col1}>
          <div>
            <div className="title big">General Info</div>
            <ul role="list">
              <li>📍 Helsinki, Finland</li>
              <li>🍁 From Canada</li>
              <li>🌐 EN, FR & FI</li>
            </ul>
          </div>
          <div>
            <div className="title big">Tech Stack</div>
            <ul role="list">
              <li>🌈 React, JS</li>
              <li>🍔 Node, Express</li>
              <li>🍃 MongoDB</li>
              <li>⚙️ Git</li>
            </ul>
          </div>
        </div>

        <div className={styles.col2}>
          <p>
            Hi, my name is Oodri and I'm a junior fullstack
            web developer living in Helsinki. I also play
            the harp, sing, and love D&D and TTRPG games.
          </p>
          <p>
            My interest for web development stems from my
            enjoyment for problem solving & challenges.
            Creating web apps for which the useful and
            stylish meet feels like a superpower to me.
          </p>
          <p>
            I initially started my career as a freelance
            musician after graduating with a Bachelor Degree
            in Music. In my work as an entrepreneur,
            learning to be autonomous, adaptive and
            resourceful have been an absolute requirements.
            I think these skills would make me a great asset
            for your team.
          </p>
          <p>
            After I graduated, I enrolled in Computer
            Science and studied there for 1 year, which
            allowed me to learn some of the basics of
            programming. More recently I have been working
            through the{' '}
            <a
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullstack Open Course
            </a>{' '}
            offered by the University of Helsinki.
          </p>
          <p>
            {/* Although my experience working with clients &
            companies as a web developer is still limited,
            tech skills have been an integral part of my
            entrepreneurial journey.  */}
            I'm eager to take on new challenges, learn new
            tools, and be part of an awesome team of
            developer.
          </p>
          {/* <p>Some of the tasks I have taken on are:</p>
          <ul>
            <li>
              Design & asset creation for my artist brand.
            </li>
            <li>
              Artist portfolio website with Wordpress &
              Elementor with integration for email signups.
            </li>
            <li>
              Artist store made with Shopify and
              print-on-demand service integration.
            </li>
            <li>Setting up email automation workflows</li>
            <li>
              Setting up and running successful Facebook
              advertisement campaigns.
            </li>
          </ul>
          <p>
            Besides my artist project, I have also taken on
            helping out friends & colleagues setup their
            professional websites & design assets over the
            years.
          </p> */}
        </div>
      </div>
    </Section>
  )
}
