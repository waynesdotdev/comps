import Route from './components/Route'
import SideBar from './components/SideBar'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'

function App() {
  return (
    <div>
      <SideBar />

      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default App
