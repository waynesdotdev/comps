import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: 'dsghf',
      label: 'Can i use React on a project',
      content:
        'You can use it on anything you wants. You can use it on anything you wants.You can use it on anything you wants.You can use it on anything you wants.',
    },
    {
      id: 'hjashfka',
      label: 'Can i use JavaScript on a project',
      content:
        'You can use it on anything you wants. You can use it on anything you wants.You can use it on anything you wants.You can use it on anything you wants.',
    },
    {
      id: 'ldjkfnched',
      label: 'Can i use CSS on a project',
      content:
        'You can use it on anything you wants. You can use it on anything you wants.You can use it on anything you wants.You can use it on anything you wants.',
    },
  ]

  return (
    <div>
      {/* <ButtonPage /> */}
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
