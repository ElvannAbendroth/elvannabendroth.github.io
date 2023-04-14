import { useLoaderData } from 'react-router-dom'

export default function Index() {
  const { contacts } = useLoaderData()

  return (
    <div id="zero-state">
      <p>
        There are {contacts.length} contacts in this
        Phonebook.
      </p>

      <p>
        This is a demo for React Router.
        <br />
        Check out{' '}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        .
      </p>
    </div>
  )
}
