import React from 'react'

import { LoginFormStyled, MyButton } from '../../styled'
export default function LoginForm({ handleChange, handleSubmit, handleLogin, values, login }) {
return (
  <LoginFormStyled onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username</label>
      <input onChange={handleChange} type="text" id="username" name="username" value={values.username} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} type="password" id="password" name="password" value={values.password} />
    </div>
    <div id="send" style={{ marginTop: "30px" }}>
      <input type="submit" value={`${login}`} />
    </div>
    <MyButton onClick={handleLogin}>New Reviewer?</MyButton>
  </LoginFormStyled>
)}
