import styles from './Button.module.css'

export default function Button({ ...props }) {
  const getTextColor = () => {
    if (props.style === 'outline') {
      const textColor =
        props.text || props.color || 'default'

      return textColor
    } else {
      const textColor = props.text || ''

      return textColor
    }
  }

  const getBorderColor = () => {
    if (props.style === 'outline') {
      const borderColor =
        props.border || props.color || 'default'

      return borderColor
    } else {
      const borderColor = props.border || 'none'

      return borderColor
    }
  }

  const getBackgroundColor = () => {
    if (props.style === 'outline') {
      const backgroundColor = props.background || 'none'

      return backgroundColor
    } else {
      const backgroundColor =
        props.background || props.color || 'default'

      return backgroundColor
    }
  }

  const label = props.label || 'Label'
  const onClick = e => {
    e.preventDefault()
    props.onClick ? props.onClick() : null
  }

  return (
    <button
      type={props.type}
      onClick={onClick}
      className={`${
        styles.root
      } bg-${getBackgroundColor()} txt-${getTextColor()} border-${getBorderColor()} `}
    >
      {props.icon} {label}
    </button>
  )
}
