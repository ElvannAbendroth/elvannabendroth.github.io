import {
  useRouteError,
  redirect,
  useNavigate,
} from 'react-router-dom'

export default function ErrorPage(props) {
  const error = useRouteError()
  const navigate = useNavigate()
  //console.error(error)

  // a || b ---> if a evaluates true, return a, else return b
  // ^ empty string evaluates as false, as does 0, etc.
  // a ?? b ---> if a is not null, return a, else return b
  // ^ e.g. empty
  const label = props.label ?? 'Oops!'

  const message =
    props.message || error?.statusText || error?.message

  return (
    <div id="error-page">
      <h1>{label}</h1>
      {error ? (
        <p>Sorry, an unexpected error has occurred.</p>
      ) : null}

      <p>
        <i>{message}</i>
      </p>
      <br />
      <button
        type="button"
        onClick={() => {
          navigate(-1)
        }}
      >
        Return to previous page
      </button>
    </div>
  )
}
