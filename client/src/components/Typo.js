import React from 'react';

export default function Typo({ data }) {
return (
<>
  {data ?
  <tr>
    <td>{data.revision}</td>
    <td>{data.page}</td>
    <td>{data.typo}</td>
    <td>{data.suggestion}</td>
    <td>{data.description}</td>
    <td>{data.verified ? <i className="fas fa-check"></i> : ''}</td>
  </tr>
  :
  // because we can't have an empty table
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  }
</>
)};
