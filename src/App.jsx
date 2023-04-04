import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Page from './pages/Page/Page'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'
import Admin from './pages/Admin/Admin'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import Error from './pages/Error/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page/>} >
          <Route path="login" element={<Login/>}/>
          <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}>
                <Route path='posts' element={<Posts/>}/>
                <Route path='admin' element={<AdminProtectedRoute><Admin/></AdminProtectedRoute>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
