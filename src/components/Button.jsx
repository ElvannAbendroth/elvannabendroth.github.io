import styles from './Button.module.css'

export default function Button({ ...props }) {
  /*style props*/

  //   if (props.style === 'outline') {
  //     const textColor =
  //       props.color || props.text || props.border || 'default'
  //     const borderColor =
  //       props.color || props.border || props.text || 'default'
  //     const backgroundColor = props.background || 'none'
  //   }

  const textColor = props.text || props.border || 'default'
  const borderColor =
    props.border || props.text || 'default'
  const backgroundColor = props.background || 'default'

  const label = props.label || 'Label'
  const onClick = e => {
    e.preventDefault()
    props.onClick()
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.root} bg-${backgroundColor} txt-${textColor} border-${borderColor} `}
    >
      {label}
    </button>
  )
}
