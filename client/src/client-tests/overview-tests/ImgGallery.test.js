/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Large from '../../components/overview/ImgGallery/Large.jsx';
import sampleData from '../../components/overview/sampleData.js';

describe('Right Arrow', () => {
  test('Right Arrow changes image after click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);
    const previousImgSrc = currentImage.src;

    fireEvent.click(rightArrow);
    expect(currentImage.src).not.toBe(previousImgSrc);
  });

  test('Right Arrow does not change image when at last image', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);

    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    const previousImgSrc = currentImage.src;
    fireEvent.click(rightArrow);

    expect(currentImage.src).toBe(previousImgSrc);
  });
});

describe('Left Arrow', () => {
  test('Left Arrow changes image after click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const leftArrow = LargeComp.getByTestId('leftArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);

    fireEvent.click(rightArrow);
    const previousImgSrc = currentImage.src;
    fireEvent.click(leftArrow);

    expect(currentImage.src).not.toBe(previousImgSrc);
  });

  test('Left Arrow does not change image when at first image', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const leftArrow = LargeComp.getByTestId('leftArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);
    const previousImgSrc = currentImage.src;

    fireEvent.click(leftArrow);

    expect(currentImage.src).toBe(previousImgSrc);
  });
});
