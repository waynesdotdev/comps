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
      label: 'Modal',
      path: '/modal',
    },
    {
      label: 'Button',
      path: '/button',
    },
  ]

  const renderedLinks = links.map(link => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className='mb-3'
        activeClassName='font-bold border-l-4 border-blue-500 pl-2'
      >
        {link.label}
      </Link>
    )
  })

  return (
    <div className='sticky top-0 flex flex-col items-start cursor-pointer'>
      {renderedLinks}
    </div>
  )
}

export default SideBar
