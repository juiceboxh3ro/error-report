import React from 'react';
import { TableButton } from '../../styled'

export default function SingleError({ data, handleVerify, handleDelete }) {
return (
<>
  {data ?
  <tr>
    <td>{data.revision}</td>
    <td>{data.page}</td>
    <td>{data.typo}</td>
    <td>{data.suggestion}</td>
    <td>{data.description}</td>
    <td><TableButton onClick={() => handleVerify(data.id)}><i className="fas fa-check"></i></TableButton></td>
    <td><TableButton onClick={() => handleDelete(data.id)}><i className="far fa-trash-alt"></i></TableButton></td>
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
