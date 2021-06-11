import React, { useState } from 'react';
import Comparison from './Comparison.jsx';

export default function Modal({ current, productData }) {
  const { name: currentName, features: currentFeatures } = current;
  const { name: comparedName, features: comparedFeatures } = productData;

  // if null, check
  // feature value overview on left, feature value compared product on right
  // iterate through both arrays, if they contain the same value then push into new array
  //
  // const comparison

  const combinedFeatures = () => {
    const results = [];
    console.log(currentFeatures, 'current');
    console.log(comparedFeatures, 'compared');
    const combined = [...currentFeatures, ...comparedFeatures];
    // const combined = currentFeatures.concat(comparedFeatures);
    // console.log(combined);
    // for (let i = 0; i < combined.length; i += 1) {
    //   const index = combined.indexOf(combined[i].feature);
    //   if (index === -1) {
    //     results.push({
    //       feature: combined[i].feature,
    //       currentValue: combined[i].value,
    //       comparedValue: '',
    //     });
    //     combined.splice(index, 1);
    //   }
    //   if (index > 0) {
    //     results.push({
    //       feature: combined[i].feature,
    //       currentValue: combined[i].value,
    //       comparedValue: combined[index].value,
    //     });
    //     combined.splice(index, 1);
    //   }
    // }

    // currentLength = currentFeatures.length;
    // comparedLength = comparedFeatures.length;
    // use indexOf or findindex you idiot its sending 10 cause youre pushing each time it returns false
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
    //     // } else {
    //     //   results.push({
    //     //     feature: currentFeatures[i].feature,
    //     //     currentValue: currentFeatures[i].value,
    //     //     comparedValue: '',
    //     //   });
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
    console.log(results, 'results');
    return combined.map((feature, i) => (<Comparison feature={feature} key={i} />));
  };

  // const combinedFeatures = [...currentFeatures, ...comparedFeatures];

  return (
    <>
      <p>COMPARING</p>
      <table>
        <th>{currentName}</th>
        <th />
        <th>{comparedName}</th>
        <tbody>
          {/* {combinedFeatures.map((feature, i) => (<Comparison feature={feature} key={i} />))} */}
          {combinedFeatures()}
        </tbody>
      </table>
    </>
  );
}

Modal.propTypes = {
  current: Number,
  selected: Number,
};

Modal.defaultProps = {
  current: 25167,
  selected: 25168,
};
