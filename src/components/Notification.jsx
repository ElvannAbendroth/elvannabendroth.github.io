import styles from './Notification.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'

export const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }
  const getNotificationStyle = () => {
    if (notification.type === 'success') {
      return styles.success
    } else if (notification.type === 'error') {
      return styles.error
    } else if (notification.type === 'update') {
      return styles.update
    } else {
      return styles.default
    }
  }

  const getIconStyle = () => {
    if (notification.type === 'success') {
      return (
        <FontAwesomeIcon icon={faSolid.faCircleCheck} />
      )
    } else if (notification.type === 'error') {
      return (
        <FontAwesomeIcon
          icon={faSolid.faTriangleExclamation}
        />
      )
    } else if (notification.type === 'update') {
      return (
        <FontAwesomeIcon
          icon={faSolid.faTriangleExclamation}
        />
      )
    } else {
      return (
        <FontAwesomeIcon
          icon={faSolid.faTriangleExclamation}
        />
      )
    }
  }

  return (
    <div
      className={[
        styles.notification,
        styles.toaster,
        getNotificationStyle(),
      ].join(' ')}
    >
      <span className="material-icons">
        {getIconStyle()}
      </span>
      <p>{notification.message}</p>
    </div>
  )
}
