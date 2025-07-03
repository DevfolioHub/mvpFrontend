import './App.css';
import UserLayout from './pages/UserLayout';
import Home from './pages/UserUI/Home';
import {AboutMe} from './pages/UserUI/AboutMe';
import Works from './pages/UserUI/Works';
import PageNotFound from './pages/PageNotFound'
import { Nav, Skills, Footer } from './components'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path=":username" element={<UserLayout />} >
          <Route path='about' element={<AboutMe/>} />
          <Route path='contact' element={<Home/>} />
          <Route path='works' element={<Works/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      <Skills/>
      <Footer/>
    </>
  )
}

export default App
