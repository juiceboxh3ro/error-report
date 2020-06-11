import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, MyHeader } from '../styled'

import firebase from '../firebase'

export default function AddReport() {
const [values, setValues] = useState({
  book: 'Select A Book',
  page: 0,
  revision: 1,
  typo: '',
  suggestion: '',
  description: ''
})
const [success, setSuccess] = useState(false)
const history = useHistory();

const handleSubmit = e => {
  e.preventDefault()

  if(!values.book || values.book === "Select A Book" || !values.page || !values.typo) return;

  firebase.firestore().collection('reports')
  .add({
    ...values,
    reviewed: false
  })

  setValues({
    book: 'Select A Book',
    page: 0,
    revision: 1,
    typo: '',
    suggestion: '',
    description: ''
  })

  setSuccess(true)
}

const handleChange = e => {
  setValues({
      ...values,
      [e.target.name]: e.target.value
    })
}

const clearSuccess = () => {
  setTimeout(() => {
    if(!success) return;
    setSuccess(false)
    history.push('/')
  }, 3000)
}

useEffect(() => {
  clearSuccess()
}, [success])

return (
  <>
  {success ?
  <MyHeader>
    <h1>Sent!</h1>
    <p>An admin will review your submission shortly.</p>
  </MyHeader> : <></>}
  <Form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="book">Book Name:</label>
      <select required onChange={handleChange} name="book" id="book" defaultValue={'Select A Book'}>
        <option disabled>Select A Book</option>
        <option disabled>---Japanese---</option>
        <option value="JFZ1">Japanese From Zero! 1</option>
        <option value="JFZ2">Japanese From Zero! 2</option>
        <option value="JFZ3">Japanese From Zero! 3</option>
        <option value="JFZ4">Japanese From Zero! 4</option>
        <option value="JFZ5">Japanese From Zero! 5</option>
        <option disabled>-----</option>
        <option value="Kanji">Kanji From Zero!</option>
        <option value="Kana">Kana From Zero!</option>
        <option value="Hira">Hiragana From Zero!</option>
        <option value="Kata">Katakana From Zero!</option>
        <option disabled>---Korean---</option>
        <option value="KFZ1">Korean From Zero! 1</option>
        <option value="KFZ2">Korean From Zero! 2</option>
        <option value="KFZ3">Korean From Zero! 3</option>
      </select>
    </div>
    <section>
      <div>
        <label htmlFor="page">Page Number</label>
        <input required onChange={handleChange} type="number" id="page" name="page" min="1" defaultValue="0" value={values.page} />
      </div>
      <div>
        <label htmlFor="revision">Revision</label>
        <input onChange={handleChange} type="number" id="revision" name="revision" min="1" defaultValue="1" value={values.revision} />
      </div>
    </section>
    <div>
      <label htmlFor="typo">Error</label>
      <input required onChange={handleChange} type="text" id="typo" name="typo" value={values.typo} />
    </div>
    <div>
      <label htmlFor="suggestion">Suggested Change</label>
      <input onChange={handleChange} type="text" id="suggestion" name="suggestion" value={values.suggestion} />
    </div>
    <div id="comments">
      <label htmlFor="description">Additonal Comments</label>
      <textarea onChange={handleChange} name="description" id="description" cols="30" rows="10" value={values.description}></textarea>
    </div>
    <div id="send">
      <label htmlFor="submit">Submit</label>
      <input type="submit" value="Send" />
    </div>
  </Form>
  </>
)}
