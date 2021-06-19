import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comparison from './Comparison.jsx';

const Modal = styled.div`
position: absolute;
width: 500px;
background: white;
transition: 1.1s ease-out;
box-shadow: -2rem 2rem 2rem
rgba(black, 0.2);
filter: blur(0);
transform: scale(1);
opacity: 1;
visibility: visible;
left: 40%;
top: 40%;
padding: 20px;
`;

const ModalText = styled.div`
  font-family: 'Open Sans', sans-serif;
  `;

export default function ComparisonModal({ current, productData }) {
  const { name: currentName, features: currentFeatures } = current;
  const { name: comparedName, features: comparedFeatures } = productData;

  const comparedData= () => {
    let results = [];
    const combined = [...currentFeatures, ...comparedFeatures];
    let long, short;

    if (currentFeatures.length > comparedFeatures.length) {
      long = currentFeatures;
      short = comparedFeatures;
    } else {
      long = comparedFeatures;
      short = currentFeatures;
    }
    var skippedHash = {};

    for (var i = 0; i < long.length; i += 1) {
      for (var j = 0; j < short.length; j += 1) {
        if (long[i].feature === short[j].feature) {
          results.push({
            feature: long[i].feature,
            currentValue: long[i].value,
            comparedValue: short[j].value,
          });
          skippedHash[long[i].feature] = 1;
        }
        else if (long[i].feature !== short[j].feature) {
          if (skippedHash[long[i].feature] !== 1) {
            results.push({
              feature: long[i].feature,
              currentValue: long[i].value,
              comparedValue: '',
            })
            skippedHash[long[i].feature] = 1;
          }
          if (skippedHash[short[j].feature] !== 1) {
            results.push({
              feature: short[j].feature,
              currentValue: short[j].value,
              comparedValue: '',
            })
            skippedHash[short[j].feature] = 1;
          }
        }
      }
    }
    return results.map((feature, i) => (<Comparison feature={feature} key={i} />));
  };

  return (

    <Modal>
      <p>COMPARING</p>
      <table>
        <th>{currentName}</th>
        <th />
        <th>{comparedName}</th>
        <tbody>
          {/* {combinedFeatures.map((feature, i) => (<Comparison feature={feature} key={i} />))} */}
          {comparedData()}
        </tbody>
      </table>
    </Modal>
  );
}

ComparisonModal.propTypes = {
  current: PropTypes.shape({}).isRequired,
  productData: PropTypes.shape({}).isRequired,
};
