import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.root}>
      {/* <div className={styles.col1}>
        <div>
          <div className="title big">What I Do</div>
          <ul role="list">
            <li>🖥️ Web Dev & Design</li>
            <li>🎵 Vocals, Harp & Metal</li>
            <li>🌙 D&D, Video Games</li>
          </ul>
        </div>

        <div>
          <div className="title big">Tools</div>
          <ul role="list">
            <li>🌈 React, JS</li>
            <li>🍔 Node, Express</li>
            <li>🍃 MongoDB</li>
          </ul>
        </div>
      </div> */}

      <div className={styles.col2}>
        <p>
          Hi, my name is Oodri and I'm a junior fullstack
          web developer from Canada living in Helsinki. I
          speak English & French fluently and am learning
          Finnish.
        </p>
        <p>
          My interest for web development stems from my
          enjoyment for problem solving & challenges.
          Creating web apps that are both useful and stylish
          makes me feel kind of like a magician.
        </p>
        <p>
          I have worked with many different tools and
          technologies including React, Node/Express,
          MongoDB & Git.
        </p>
        <h3>Experience</h3>
        <p>
          I initially started my career as a freelance
          musician 10+ years ago, for which being
          autonomous, adaptive and resourceful have been an
          absolute requirement. Those skills have proven
          highly helpful in my web development journey so
          far and I think they could make me a great asset
          for your team.
        </p>
        <p>
          Although my experience working with clients &
          companies as a web developer is still limited,
          technology has always played a crucial part of my
          entrepreneurial journey. Some of the tasks I have
          taken on are:
        </p>
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
        </p>
        <h3>Education</h3>
        <p>
          I graduated with a Bachelor's Degree in music with
          the University of Montreal in 2016 as a harpist
          and classical singer, after which I studied
          Computer Science for 1 year. I am currently going
          through the{' '}
          <a
            href="https://fullstackopen.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fullstack Open Course
          </a>{' '}
          offered by the University of Helsinki as well as
          working on side projects.
        </p>
      </div>
    </div>
  )
}
