import React from 'react';

export default function Comparison( {feature: {comparedValue, currentValue, feature}} ) {
  return (
    <tr>
      <td>{currentValue}</td>
      <td>{feature}</td>
      <td>{comparedValue}</td>
    </tr>
  );
};
