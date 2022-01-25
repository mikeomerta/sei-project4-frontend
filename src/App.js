import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
// import axios from 'axios'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import BookShow from './components/books/BookShow'
import BookIndex from './components/books/BookIndex'
import Favourites from './components/books/Favourites'
import AddComment from './components/AddComments'
import Register from './auth/Register'
import Login from './auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/books" element = {<BookIndex />} />
        <Route path = "/books/:bookId" element = {<BookShow />} />
        <Route path = "/favourites" element = {<Favourites />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} /> 
        <Route path = "/books/comments" element = {<AddComment />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
