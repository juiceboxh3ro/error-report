import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

import Typo from './Typo'
import { MyHeader, MyTable, Loading } from '../styled'

export default function TyposView({ values }) {
const [reports, setReports] = useState([])
const [bookName, setBookName] = useState('')
const [loading, setLoading] = useState(false)

const handleData = async () => {
  if(!values) return
  setLoading(true)
  setReports([])
  let submissions = []
  let snapshot = await firebase.firestore().collection('reports').where('book','==',`${values}`).orderBy('page').get()
  snapshot.forEach(doc => {
    const submission = {
      'id': doc.id,
      'book': doc.data().book,
      'page': doc.data().page,
      'revision': doc.data().revision,
      'typo': doc.data().typo,
      'suggestion': doc.data().suggestion,
      'description': doc.data().description,
      'reviewed': doc.data().reviewed
    }
    submissions.push(submission)
    const byPage = submissions.sort((a, b) => a.page - b.page)
    setReports(byPage)
  })
  setLoading(false)
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
}, [values])

return (
<>
  {bookName ? <MyHeader><h1>{bookName}</h1></MyHeader> : <></>}
  {loading ? <Loading>Loading...</Loading> : <></>}
  <MyTable>
    <thead>
      <tr>
        <th>Page</th>
        <th>Revision</th>
        <th>Typo</th>
        <th>Suggested</th>
        <th>Description</th>
        <th>Verified</th>
      </tr>
    </thead>
    <tbody>
      {reports.map(data => (
        <Typo key={data.id} data={data} />
      ))}
    </tbody>
  </MyTable>
</>
)}
