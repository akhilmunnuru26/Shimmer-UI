import About from './components/About'
import Body from './components/Body'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Teams from './components/Teams'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'


 // Always Create a Wrapper component/ Higher order component like Protected Route Component
const App = () => {
  return (
    <div>
      <header className="text-lg font-bold text-white mb-2 bg-black flex flex-row align-middle justify-between p-2">Meme Application
      <nav className="flex flex-row">
      <a href="/" className="mx-2">Home</a>
        <a href="/About" className="mx-2">About</a>
        <a className="mx-2" href="/teams">Teams</a>
        <a className="mx-2" href="/login">Login</a>
      </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route element={<ProtectedRoute/>}>
              <Route path='/About' element={<About/>}/>
              <Route path='/Teams' element={<Teams/>}/>
          </Route>
          
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
    
  )
}

export default App