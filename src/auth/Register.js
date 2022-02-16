import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'


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
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)
  
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  

  const handleImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, image: res.data.url })    
    setIsUploadingImage(false)
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
    <div className='register-container'>
      <div className='hero-image'>
        <img src="https://i.imgur.com/KzjsD8w.jpg" alt="books hero"/>
      </div> 
      <div className='form-container'>
        <form onSubmit={handleSubmit}>        
          <div>
            <label htmlFor="username" className='username-text'>Username</label>
            <div>
              <input 
                className='input is-black'
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
          </div>        
          <div>
            <label htmlFor="email" className='email-text'>Email</label>
            <div>
              <input 
                className='input is-black'
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
          </div>        
          <div>
            <label htmlFor="password" className='password-text'>Password</label>
            <div>
              <input 
                className='input is-black'
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
                className='input is-black'
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Password confirmation"
                onChange={handleInputChange}
              />
            </div>
          </div>  
          {isUploadingImage && <p>Image uploading</p>}
          {formData.image ?
            <div>
              <img src={formData.image} alt="uploaded primary image"/>
            </div>
            :
            <div>
              <div className="form-field-image">
                <label htmlFor="image" className='register-image-text'>Image</label>
                <label htmlFor="image" className="custom-file-upload">Browse</label>
                <input id="file-upload" type="file"/>
              </div>             
              <div>
                <input 
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg"
                  placeholder="Image"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          }
          <div className='register-button' htmlFor="button">
            <button 
              id="button"
              className='button is-black is-outlined is-rounded'
              type="submit"
            >Register</button>
          </div>          
          <div className='login-reminder'>
            <p>Already registered? <Link to="/login">Login</Link></p> 
          </div>        
        </form>
      </div>
    </div>        
  )
}

export default Register