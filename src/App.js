import Header from './components/Header'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import AllProperties from './components/AllProperties'
import SingleProperty from './components/SingleProperty'
import AddProperty from './components/AddProperty'
import AddReview from './components/AddReview'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'

import './App.css'

import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/allproperties' element={<AllProperties />}></Route>
            <Route path='/singleproperty' element={<SingleProperty />}></Route>
            <Route path='/userprofile' element={<UserProfile />}></Route>
            <Route path='/addproperty' element={<AddProperty />}></Route>
            <Route path='/addreview' element={<AddReview />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )  
}

export default App;
