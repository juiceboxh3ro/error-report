import React, { useState } from 'react'

import { Form, Reports } from '../styled'
import TyposView from './TyposView'

export default function ReportList() {
  const [values, setValues] = useState('JFZ1')

  const handleChange = (e) => {
    e.preventDefault();
    setValues(e.target.value)
  }

return (
  <Reports>
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
    <TyposView values={values} />
  </Reports>
  )
}
