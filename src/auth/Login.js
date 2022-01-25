import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { setToken } from '../lib/auth'
import { loginUser } from '../lib/api'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)
      const res = await loginUser(formData)
      setToken(res.data.token)
      navigate('/books')   
    } catch (err) {
      console.log(err)
    }
  }

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
        <div htmlFor="button">
          <button 
            id="button"
            className='button'
            type="submit"
          >Login</button>
        </div>
        <div>
          <p>Already registered? <Link to="/register">Register</Link></p> 
        </div>        
      </form>
    </div>        
  )
}

export default Login
