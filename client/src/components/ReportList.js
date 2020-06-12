import React, { useState, useEffect } from 'react'

import { Form, Reports, MyHeader, Loading } from '../styled'
import TyposView from './TyposView'

export default function ReportList() {
  const [values, setValues] = useState('JFZ1')
  const [loading, setLoading] = useState(false)
  const [bookName, setBookName] = useState('Japanese From Zero! 1')

  const handleChange = (e) => {
    e.preventDefault();
    setValues(e.target.value)
  }
  
const handleName = () => {
  switch(values) {
    case 'JFZ1':
      setBookName('Japanese From Zero! 1')
      break;
    case 'JFZ2':
      setBookName('Japanese From Zero! 2')
      break;
    case 'JFZ3':
      setBookName('Japanese From Zero! 3')
      break;
    case 'JFZ4':
      setBookName('Japanese From Zero! 4')
      break;
    case 'JFZ5':
      setBookName('Japanese From Zero! 5')
      break;
    case 'Kanji':
      setBookName('Kanji From Zero!')
      break;
    case 'Kana':
      setBookName('Kana From Zero!')
      break;
    case 'Hira':
      setBookName('Hiragana From Zero!')
      break;
    case 'Kata':
      setBookName('Katakana From Zero!')
      break;
    case 'KFZ1':
      setBookName('Korean From Zero! 1')
      break;
    case 'KFZ2':
      setBookName('Korean From Zero! 2')
      break;
    case 'KFZ3':
      setBookName('Korean From Zero! 3')
      break;
    default:
      break;
  }
}

useEffect(() => {
  handleName()
// eslint-disable-next-line
}, [values])

return (
  <Reports>
      {bookName ? <MyHeader><h1>{bookName}</h1></MyHeader> : <></>}
      {loading ? <Loading>Loading...</Loading> : <Loading></Loading>}
    <Form>
      <label htmlFor="book">Select a book to view errors for</label>
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
    </Form>
    <TyposView values={values} setLoading={setLoading} />
  </Reports>
  )
}
