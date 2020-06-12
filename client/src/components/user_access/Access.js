import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../../utility/axiosWithAuth'
import LoginForm from './LoginForm'

export default function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [login, setLogin] = useState('Login')
  
  let history = useHistory()

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(login === "Login") {
      axiosWithAuth()
      .post('/api/auth/login', values)
      .then(res => {
        if(res.status === 200) {
          setValues({ username: '', password: '' })
          localStorage.setItem('fzrtoken', JSON.stringify(res.data.token))
          history.push('/review')
        }
      })
      .catch(err => console.error(err))
    } else if (login === "Register") {
      axiosWithAuth()
      .post('/api/auth/register', values)
      .then(res => {
        if(res.status === 201) {
          setLogin("Login")
        }
      })
      .catch(err => console.error(err))
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if(login === "Register") {
      setLogin("Login")
    } else {
      setLogin("Register")
    }
  }

  return (
    <div>
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} handleLogin={handleLogin} values={values} login={login} />
    </div>
  )
}
