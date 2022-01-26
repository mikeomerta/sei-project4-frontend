import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
// import axios from 'axios'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import BookShow from './components/books/BookShow'
import BookIndex from './components/books/BookIndex'
import Favourites from './components/books/Favourites'
import AddBook from './components/books/AddBook'
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
        <Route path = "/books/create" element = {<AddBook />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
