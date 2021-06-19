import React from 'react';
import PropTypes from 'prop-types';

export default function Comparison({ feature: { comparedValue, currentValue, feature } }) {
  return (
    <tr>
      <td>{currentValue}</td>
      <td>{feature}</td>
      <td>{comparedValue}</td>
    </tr>
  );
};

Comparison.propTypes = {
  feature: PropTypes.shape({}).isRequired,
  comparedValue: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
};
