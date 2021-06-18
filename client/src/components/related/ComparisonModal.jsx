import React, { useState } from 'react';
import Comparison from './Comparison.jsx';
import styled from 'styled-components'

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

  const tester = () => {
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

  // checkmark &#10003

  // const combinedFeatures = () => {
  //   const results = [];
  //   // console.log(currentFeatures, 'current');
  //   // console.log(comparedFeatures, 'compared');
  //   const combined = [...currentFeatures, ...comparedFeatures];
  //   // const combined = currentFeatures.concat(comparedFeatures);
  //   console.log(combined);
  //   for (let i = currentFeatures.length; i < combined.length; i += 1) {
  //     const index = combined.indexOf(combined[i].feature);
  //     if (index === -1) {
  //       results.push({
  //         feature: combined[i].feature,
  //         currentValue: combined[i].value,
  //         comparedValue: '',
  //       });
  //       combined.splice(index, 1);
  //     }
  //     if (index > 0) {
  //       results.push({
  //         feature: combined[i].feature,
  //         currentValue: combined[i].value,
  //         comparedValue: combined[index].value,
  //       });
  //       combined.splice(index, 1);
  //     }
  //   }

  // currentLength = currentFeatures.length;
  // comparedLength = comparedFeatures.length;
  // for (let i = 0; i < combined.length; i += 1) {
  //   for (let j = i + 1; j < combined.length; j += 1) {
  //     if (combined[i].feature === combined[j].feature) {
  //       results.push({
  //         feature: combined[i].feature,
  //         currentValue: combined[i].value,
  //         comparedValue: combined[j].value,
  //       });
  //     // } else {
  //     //   results.push({
  //     //     feature: combined[i].feature,
  //     //     currentValue: combined[i].value,
  //     //     comparedValue: '',
  //     //   });
  //     }
  //   }
  // }
  // for (let i = 0; i < currentFeatures.length; i += 1) {
  //   for (let j = 0; j < comparedFeatures.length; j += 1) {

  //     if (currentFeatures[i].feature === comparedFeatures[j].feature) {
  //       results.push({
  //         feature: currentFeatures[i].feature,
  //         currentValue: currentFeatures[i].value,
  //         comparedValue: comparedFeatures[j].value,
  //       });
  //     } else {
  //       results.push({
  //         feature: currentFeatures[i].feature,
  //         currentValue: currentFeatures[i].value,
  //         comparedValue: '',
  //       });
  //     }
  //   }
  // }
  // for (let i = 0; i < comparedFeatures.length; i += 1) {
  //   for (let j = 0; j < currentFeatures.length; j += 1) {
  //     if (comparedFeatures[i].feature === currentFeatures[j].feature) {
  //       results.push({
  //         feature: comparedFeatures[i].feature,
  //         currentValue: currentFeatures[j].value,
  //         comparedValue: comparedFeatures[i].value,
  //       });
  //     // } else {
  //     //   results.push({
  //     //     feature: comparedFeatures[i].feature,
  //     //     currentValue: '',
  //     //     comparedValue: comparedFeatures[i].value,
  //     //   });
  //     }
  //   }
  // }
  // console.log(results, 'results');
  //   return combined.map((feature, i) => (<Comparison feature={feature} key={i} />));
  // };

  // const combinedFeatures = [...currentFeatures, ...comparedFeatures];

  return (

    <Modal>
      <p>COMPARING</p>
      <table>
        <th>{currentName}</th>
        <th />
        <th>{comparedName}</th>
        <tbody>
          {/* {combinedFeatures.map((feature, i) => (<Comparison feature={feature} key={i} />))} */}
          {tester()}
        </tbody>
      </table>
    </Modal>
  );
}
