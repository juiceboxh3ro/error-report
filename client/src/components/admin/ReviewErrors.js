import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utility/axiosWithAuth'
import SingleError from './SingleError'
import { MyHeader, MyTable, Loading } from '../../styled'

export default function ReviewErrors({ values, setLoading }) {
const [reports, setReports] = useState([])

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

const handleDelete = async (id) => {
  await axiosWithAuth()
  .delete(`/api/report/${id}`)
  .then(({ status }) => {
    if (status === 200) {
      setReports(reports.filter(i => i.id !== id))
    }
  })
  .catch(err => console.error(err))
}

useEffect(() => {
  handleData()
// eslint-disable-next-line
}, [values])

return (
<>
  <MyTable>
    <thead>
      <tr>
        <th>Revision</th>
        <th>Page</th>
        <th>Typo/Error</th>
        <th>Suggested Change</th>
        <th>Additional Comments</th>
        <th>Verify?</th>
        <th>Delete?</th>
      </tr>
    </thead>
    <tbody>
      {reports.map(report => (
        <SingleError key={report.id} data={report} handleVerify={handleVerify} handleDelete={handleDelete} />
      ))}
    </tbody>
  </MyTable>
</>
)}
