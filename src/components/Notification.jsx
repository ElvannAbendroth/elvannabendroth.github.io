import styles from './Notification.module.css'

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
      return 'done'
    } else if (notification.type === 'error') {
      return 'clear'
    } else if (notification.type === 'update') {
      return 'warning_amber'
    } else {
      return 'priority_high'
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
