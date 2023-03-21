import Accordion from './components/Accordion'
// import ButtonPage from './pages/ButtonPage'

function App() {
  const items = [
    {
      id: 1,
      label: 'Can i use React on a project',
      content: 'You can use it on anything you wants.',
    },
    {
      id: 2,
      label: 'Can i use JavaScript on a project',
      content: 'You can use it on anything you wants.',
    },
    {
      id: 3,
      label: 'Can i use CSS on a project',
      content: 'You can use it on anything you wants.',
    },
  ]

  return (
    <div>
      {/* <ButtonPage /> */}
      <Accordion items={items} />
    </div>
  )
}

export default App
