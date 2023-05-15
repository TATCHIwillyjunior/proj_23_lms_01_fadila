



//for add students
import React from 'react';

export default function Item(props) {
  return (
  <tr>
  <td>{props.details.Id}</td>
  <td>{props.details.Section}</td>
  <td>{props.details.Name}</td>
  <td>{props.details.Grade}</td>
  </tr>
  );
}