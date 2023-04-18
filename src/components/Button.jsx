import styles from './Button.module.css'

export default function Button({ children, ...props }) {
  const getTextColor = () => {
    if (
      props.variant === 'outlined' ||
      props.variant === 'text' ||
      !props.variant
    ) {
      const textColor = props.color || 'primary'

      return textColor
    } else {
      const textColor = props.color || 'bg'

      return textColor
    }
  }

  const getBorderColor = () => {
    if (props.variant === 'outlined') {
      const borderColor = props.color || 'primary'

      return borderColor
    } else {
      const borderColor = 'none'

      return borderColor
    }
  }

  const getBackgroundColor = () => {
    if (
      props.variant === 'outlined' ||
      props.variant === 'text' ||
      !props.variant
    ) {
      const backgroundColor = 'none'

      return backgroundColor
    } else {
      const backgroundColor = props.color || 'primary'

      return backgroundColor
    }
  }

  const onClick = e => {
    if (props.onClick) {
      e.preventDefault()
      props.onClick()
    }
  }

  return (
    <button
      type={props.type}
      onClick={onClick}
      className={`${
        styles.root
      } bg-${getBackgroundColor()} txt-${getTextColor()} border-${getBorderColor()} `}
    >
      {children}
    </button>
  )
}
