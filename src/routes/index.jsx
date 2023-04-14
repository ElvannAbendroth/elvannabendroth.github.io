import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { getContacts } from '../services/contacts'

export async function loader({ request }) {
  const url = new URL(request.url)
  const contacts = await getContacts()
  return { contacts }
}

export default function Index() {
  const { contacts } = useLoaderData()
  const [totalContacts] = useState(contacts.length)
  return (
    <div id="zero-state">
      <p>
        There are {totalContacts} contacts in this
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
