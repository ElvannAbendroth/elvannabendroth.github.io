import './App.css'

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <div className="logo title text-secondary">
            Oodri.dev
          </div>
        </a>
        <Navbar />
      </Header>
      <Main>
        <Section label="Hero" className="hero">
          <div className="hero-content">
            <h1>
              Hei, I'm{' '}
              <span className="text-secondary">Oodri</span>!
            </h1>
            <p>
              I'm a{' '}
              <span className="text-secondary">
                Full-stack
              </span>{' '}
              developer with a love for design and playing
              music.
            </p>
            <ul role="list" className="">
              <li>📍 Helsinki, Finland</li>
              <li>🌿 React, Node.js, MongoDB</li>
              <li>🛒 Wordpress, Shopify</li>
            </ul>
            <a
              href="https://github.com/ElvannAbendroth"
              target="_blank"
            >
              {' '}
              <button className="button button-primary">
                Visit my Github
              </button>
            </a>
          </div>

          <div>
            <img
              className="hero-picture"
              src="https://cdn.midjourney.com/9cd37d22-78e1-4802-be0d-732f1df2f25f/0_1.png"
              alt=""
            />
          </div>
        </Section>

        <Section label="About" className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas cursus leo at erat
            ornare blandit. Sed finibus finibus lacus sit
            amet vestibulum. Vestibulum pellentesque risus
            ligula, porta sodales velit tincidunt ac.
          </p>

          <p>
            Vestibulum pretium eleifend diam, ac lacinia
            massa porttitor vitae. Praesent viverra eget ex
            imperdiet sagittis. Praesent accumsan ornare
            ullamcorper. Etiam sed dignissim arcu. Sed
            gravida dolor sit amet tincidunt ullamcorper.
            Integer lobortis quam in vulputate suscipit.
            Donec facilisis cursus est.
          </p>
        </Section>

        <Section label="Projects" className="projects">
          <p>Here are my projects</p>
        </Section>

        <Section label="Contact" className="contact">
          <p>Here's a little bit about me</p>
        </Section>
      </Main>
    </>
  )
}

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
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

function Main({ children }) {
  return <main>{children}</main>
}

function Section({ label, className, children }) {
  return (
    <section className={className}>
      <div className="content-wrapper ">
        {label != 'Hero' ? <h2>{label}</h2> : null}
        {children}
      </div>
    </section>
  )
}

function Header({ children }) {
  return <header>{children}</header>
}
