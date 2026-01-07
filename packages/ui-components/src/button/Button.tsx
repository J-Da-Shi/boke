import './style.css'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | 'link'
}

const Button = (props: ButtonProps) => {
  console.log(props, 'props')
  return (
    <button {...props} className={`btn btn-${props.variant || 'default'}`}>
      {props.children}
    </button>
  )
}

export { Button, type ButtonProps }
