import './App.css'
import Content from './components/Content'
import LeftMenu from './components/LeftMenu'
import Navigation from './components/Navigation'
import RightMenu from './components/RightMenu'
import Sidebar from './components/SideBar'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <LeftMenu />
      <Content />
      <RightMenu />
    </div>
  )
}

export default App
