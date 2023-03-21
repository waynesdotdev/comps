const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  let baseClassName = 'px-3 py-1.5 border'
  if (primary) {
    baseClassName += 'border-blue-500 bg-blue-500 text-white'
  }

  return <button className={baseClassName}>{children}</button>
}

export default Button
