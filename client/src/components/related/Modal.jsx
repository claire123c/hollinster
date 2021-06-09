import React, { useState } from 'react';

export default function Modal() {
  const [current, setCurrent] = useState();
  const [selected, setSelectd] = useState();

  return (
    <>
      <p>COMPARING</p>
      <table>
        <colgroup span="3" />
        <tr>
          <th>Current Product Name</th>
          <th></th>
          <th>Compared Product Name</th>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
        <tr>
          <td>Current Product Value</td>
          <td>Characteristic</td>
          <td>Compared Product Value</td>
        </tr>
      </table>
    </>
  );
}
