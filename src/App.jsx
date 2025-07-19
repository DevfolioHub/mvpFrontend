import './App.css';
import UserLayout from './pages/UserLayout';
import AppLayout from './AppLayout';
import Home from './pages/UserUI/Home';
import {AboutMe} from './pages/UserUI/AboutMe';
import Works from './pages/UserUI/Works';
import PageNotFound from './pages/PageNotFound'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Static Routes */}
          <Route element={<UserLayout />}>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<AboutMe/>} />
            {/* <Route path='contact' element={<Home/>} /> */}
            <Route path='works' element={<Works/>} />
          </Route>

          {/* Dynamic User Routes */}
          <Route path=":username" element={<UserLayout />} >
            <Route index element={<Home/>} />
            <Route path='about' element={<AboutMe/>} />
            {/* <Route path='contact' element={<Home/>} /> */}
            <Route path='works' element={<Works/>} />
          </Route>

          {/* Fallback 404 */}
          <Route path="not-found" element={<PageNotFound />} />
          <Route path='*' element={<PageNotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
