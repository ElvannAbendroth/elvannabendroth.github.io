import './App.css'

function App() {
  return (
    <div className="App">
      <div className="hero-container">
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
          <ul className="hero-list">
            <li>📍 Helsinki, Finland</li>
            <li>🌿 React, Node.js, MongoDB</li>
            <li>🛒 Wordpress, Shopify</li>
          </ul>
          <a
            href="https://github.com/ElvannAbendroth"
            target="_blank"
          >
            {' '}
            <button className="button-primary">
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
      </div>
    </div>
  )
}

export default App
