import React from 'react';

export default function SingleError({ data, handleVerify }) {
return (
<>
  {data ?
  <tr>
    <td>{data.revision}</td>
    <td>{data.page}</td>
    <td>{data.typo}</td>
    <td>{data.suggestion}</td>
    <td>{data.description}</td>
    <td><button onClick={() => handleVerify(data.id)}>✔</button></td>
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
