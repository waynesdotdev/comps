import classNames from 'classnames'
import useNavigation from '../hooks/useNavigation'

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation()

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  const handleClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return (
    //eslint-disable-next-line
    <a className={classes} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
