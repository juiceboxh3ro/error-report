import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utility/axiosWithAuth'
import SingleError from './SingleError'
import { MyHeader, MyTable, Loading } from '../../styled'

export default function ReviewErrors({ values }) {
const [reports, setReports] = useState([])
const [bookName, setBookName] = useState('')
const [loading, setLoading] = useState(false)

const handleData = async () => {
  setLoading(true)
  await axiosWithAuth()
  .get(`/api/report/${values}`)
  .then(({ status, data }) => {
    if (status === 200) {
      setReports(data.unverified)
    }
  })
  .catch(err => console.error(err))
  setLoading(false)
}

const handleVerify = async (id) => {
  await axiosWithAuth()
  .put(`/api/report/${id}`, { verified: true })
  .then(({ status }) => {
    if (status === 200) {
      setReports(reports.filter(i => i.id !== id))
    }
  })
  .catch(err => console.error(err))
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
  handleData()
  handleName()
// eslint-disable-next-line
}, [values])

return (
<>
  {bookName ? <MyHeader><h1>{bookName}</h1></MyHeader> : <></>}
  {loading ? <Loading>Loading...</Loading> : <></>}
  <MyTable>
    <thead>
      <tr>
        <th>Revision</th>
        <th>Page</th>
        <th>Typo/Error</th>
        <th>Suggested Change</th>
        <th>Additional Comments</th>
        <th>Verify?</th>
      </tr>
    </thead>
    <tbody>
      {reports.length && reports.map(report => (
        <SingleError key={report.id} data={report} handleVerify={handleVerify} />
      ))}
    </tbody>
  </MyTable>
</>
)}
