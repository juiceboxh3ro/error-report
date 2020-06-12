import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utility/axiosWithAuth'
import Typo from './Typo'
import { MyTable } from '../styled'

export default function TyposView({ values, setLoading }) {
const [reports, setReports] = useState([])

const handleData = async () => {
  setLoading(true)
  await axiosWithAuth()
  .get(`/api/report/${values}`)
  .then(({ status, data }) => {
    if (status === 200) {
      setReports(data.data)
    }
  })
  .catch(err => console.error(err))
  setLoading(false)
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
        <th>Verified</th>
      </tr>
    </thead>
    <tbody>
      {reports.map(report => (
        <Typo key={report.id} data={report} />
      ))}
    </tbody>
  </MyTable>
</>
)}
