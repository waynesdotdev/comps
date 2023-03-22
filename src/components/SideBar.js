import Link from './Link'

const SideBar = () => {
  const links = [
    {
      label: 'Dropdown',
      path: '/',
    },
    {
      label: 'Accordion',
      path: '/accordion',
    },
    {
      label: 'Button',
      path: '/button',
    },
  ]

  const renderedLinks = links.map(link => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    )
  })

  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col cursor-pointer'>
      {renderedLinks}
    </div>
  )
}

export default SideBar
