import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <h3>Things I like</h3>
        <ul role="list">
          <li>📍 Helsinki, Finland</li>
          <li>🌿 React, Node.js, MongoDB</li>
          <li>🛒 Wordpress, Shopify</li>
        </ul>
      </div>
      <div className={styles.col2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas cursus leo at erat ornare blandit.
          Sed finibus finibus lacus sit amet vestibulum.
          Vestibulum pellentesque risus ligula, porta
          sodales velit tincidunt ac.
        </p>

        <p>
          Vestibulum pretium eleifend diam, ac lacinia massa
          porttitor vitae. Praesent viverra eget ex
          imperdiet sagittis. Praesent accumsan ornare
          ullamcorper. Etiam sed dignissim arcu. Sed gravida
          dolor sit amet tincidunt ullamcorper. Integer
          lobortis quam in vulputate suscipit. Donec
          facilisis cursus est.
        </p>
      </div>
    </div>
  )
}
