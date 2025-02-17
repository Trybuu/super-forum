import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Thread from './components/routes/thread/Thread'
import UserProfile from './components/routes/userProfile/UserProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/categorythreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
    </Routes>
  )
}

export default App
