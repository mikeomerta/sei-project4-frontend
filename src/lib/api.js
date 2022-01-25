import axios from 'axios'
import { getToken } from '../lib/auth'

const baseUrl = 'http://localhost:3000/api'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllBooks() {
  return axios.get(`${baseUrl}/books/`)
}

export function getSingleBook(bookId) {
  return axios.get(`${baseUrl}/books/${bookId}/`)
}

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register/`, formData)  
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login/`, formData)  
}