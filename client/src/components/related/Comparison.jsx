import React from 'react';

export default function Comparison( {feature: {feature, value}} ) {
  return (
    <tr>
      <td>Current Product Value</td>
      <td>{feature}</td>
      <td>{value}</td>
    </tr>
  );
};
