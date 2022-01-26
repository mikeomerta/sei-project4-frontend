import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { createBook, headers } from '../../lib/api'

const intialState = {
  title: '',
  author: '',
  image: '',
}

function AddBook() {
  const navigate = useNavigate()
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)
  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  
  const handleTextInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors,  [e.target.name]: '' })
  }
  console.log(formData)

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
      const res = await createBook(formData, headers)
      navigate(`/books/${res.data.id}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <div>
                <input 
                  className='input'
                  name="title"
                  id="title"
                  placeholder="Title"
                  onChange={handleTextInputChange}
                />
              </div>
              {formErrors.title && <p>Title is a required field</p>}
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <div>
                <input 
                  className='input'
                  name="author"
                  id="author"
                  placeholder="Author"
                  onChange={handleTextInputChange}
                />
              </div>
              {formErrors.title && <p>Title is a required field</p>}
            </div>
            {isUploadingImage && <p>Image uploading</p>}
            {formData.image ?
              <div>
                <img src={formData.image} alt="uploaded primary image"/>
              </div>
              :
              <div className="form-field">
                <label htmlFor="image">Image</label>
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
                {formErrors.image && <p>Image is a required field</p>}
              </div>
            }          
            <div>
              <div>
                <button type="submit">Submit!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddBook