import LeftMenu from '../areas/LeftMenu'
import Main from '../areas/main/Main'
import Navigation from '../areas/Navigation'
import RightMenu from '../areas/RightMenu'
import Sidebar from '../areas/sidebar/SideBar'

import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="screen-root-container home-container">
      <div className="navigation">
        <Navigation />
      </div>
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  )
}

export default Home
