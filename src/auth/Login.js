import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { setToken, setUserId } from '../lib/auth'
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
      console.log(res.data)
      setToken(res.data.token)
      setUserId(res.data.id[0])
      navigate('/books')   
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login-container'>
      <div className='hero-image'>
        <img src="https://i.imgur.com/KzjsD8w.jpg" alt="books hero"/>
      </div> 
      <div className='form-container'>
        <form onSubmit={handleSubmit}>        
          <div>
            <label htmlFor="username" className='username-text'>Username</label>
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
            <label htmlFor="password" className='password-text'>Password</label>
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
            <label htmlFor="passwordConfirmation" className='password-confirmation-text'>Password Confirmation</label>
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
          <div className='login-button' htmlFor="button">
            <button 
              id="button"
              className='button is-black is-outlined is-rounded'
              type="submit"
            >Login</button>
          </div>          
          <div className='register-reminder'>
            <p>Already registered? <Link to="/register">Register</Link></p> 
          </div>        
        </form>
      </div>
    </div>        
  )
}

export default Login
