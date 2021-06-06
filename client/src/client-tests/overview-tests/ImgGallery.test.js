/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Large from '../../components/overview/ImgGallery/Large.jsx';
import sampleData from '../../components/overview/sampleData.js';
console.log(sampleData.results[0].name, 'CANN YOU SEE THIS');

test('Right Arrow changes image after click', () => {
  const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
  const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
  const currentImage = LargeComp.getByAltText(sampleData.results[0].name);
  const previousImgSrc = currentImage.src;

  fireEvent.click(rightArrow);
  expect(currentImage.src).not.toBe(previousImgSrc);


});