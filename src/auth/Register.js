import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

import { setToken } from '../lib/auth'
import { loginUser, registerUser } from '../lib/api'

const intialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const [formData, setFormData] = React.useState(intialState)
  const navigate = useNavigate
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const ress = await registerUser(formData)
      console.log(ress.data)
      const loginForm = {
        email: formData.email,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
      }
      console.log(loginForm)
      const res = await loginUser(loginForm)
      setToken(res.data.token)
      navigate('/books')
    } catch (err) {
      console.log(err)
    }
  }

  console.log(formData)  

  return (
    <div>
      <form onSubmit={handleSubmit}>        
        <div>
          <label htmlFor="username">Username</label>
          <div>
            <input 
              className='input'
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>
        </div>        
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input 
              className='input'
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
        </div>        
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input 
              className='input'
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <div>
            <input  
              className='input'
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Password confirmation"
              onChange={handleInputChange}
            />
          </div>
        </div>  
        <div>
          <label htmlFor="profileImage">Profile Image</label>
          <div>
            <input  
              className='input'
              name="profileImage"
              id="profileImage"
              placeholder="image"
              onChange={handleInputChange}
            />
          </div>
        </div>              
        <div htmlFor="button">
          <button 
            id="button"
            className='button'
            type="submit"
          >Register</button>
        </div>
        <div>
          <p>Already registered? <Link to="/login">Login</Link></p> 
        </div>        
      </form>
    </div>        
  )
}

export default Register