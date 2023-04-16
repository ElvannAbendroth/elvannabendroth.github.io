import styles from './Projects.module.css'

const randomNumber = () => {
  return Math.floor(Math.random() * 100)
}

const projects = [
  {
    title: 'Artist Portfolio',
    description:
      'Portfolio website using Wordpress and designed using Elementor.  This store uses the Mailerlite API for collecting emails.',
    image: `https://picsum.photos/300/200?random=${randomNumber()}`,
    stack: ['Wordpress', 'Elementor'],
  },
  {
    title: 'Artist Online Store',
    description:
      'Online store build with Shopify and connected to a print-on-demand service.',
    image: `https://picsum.photos/300/200?random=${randomNumber()}`,
    stack: ['Shopify'],
  },
]

export default function Projects({}) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>Here are my projects</p>

      <div className={styles.projects}>
        {projects.map(project => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <img
              className={styles.image}
              src={project.image}
              alt=""
            />
            <ul className={styles.stack} role="list">
              {project.stack.map(stack => (
                <li key={stack}>
                  <img
                    className={styles.stackIcon}
                    src={`assets/stack/${stack}.png`}
                    alt=""
                  />
                </li>
              ))}
            </ul>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
