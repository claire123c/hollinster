/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Large from '../../components/overview/ImgGallery/Large.jsx';
import Mini from '../../components/overview/ImgGallery/Mini.jsx';
import Minis from '../../components/overview/ImgGallery/Minis.jsx';
import Gallery from '../../components/overview/ImgGallery/Gallery.jsx';
import { sampleData, sampleData2 } from '../../components/overview/sampleData.js';

describe('Right Arrow', () => {
  test('Right Arrow changes image after click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = document.querySelector('.defaultview');
    const previousAttr = currentImage.getAttribute('src');

    fireEvent.click(rightArrow);

    expect(currentImage.getAttribute('src')).not.toBe(previousAttr);
  });

  test('Right Arrow does not change image when at last image', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = document.querySelector('.defaultview');

    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    const previousAttr = currentImage.getAttribute('src');
    fireEvent.click(rightArrow);

    expect(currentImage.getAttribute('src')).toBe(previousAttr);
  });
});

describe('Left Arrow', () => {
  test('Left Arrow changes image after click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const leftArrow = LargeComp.getByTestId('leftArrowImgGallery');
    const currentImage = document.querySelector('.defaultview');

    fireEvent.click(rightArrow);
    const previousAttr = currentImage.getAttribute('src');
    fireEvent.click(leftArrow);

    expect(currentImage.getAttribute('src')).not.toBe(previousAttr);
  });

  test('Left Arrow does not change image when at first image', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const leftArrow = LargeComp.getByTestId('leftArrowImgGallery');
    const currentImage = document.querySelector('.defaultview');
    const previousAttr = currentImage.getAttribute('src');

    fireEvent.click(leftArrow);

    expect(currentImage.getAttribute('src')).toBe(previousAttr);
  });
});

describe('Click Thumbnails', () => {
  test('Thumbnail changes default image on click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const currentImage = document.querySelector('.defaultview');
    const thumbnail2 = LargeComp.getByAltText('https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');
    const previousAttr = currentImage.getAttribute('src');

    fireEvent.click(thumbnail2);

    expect(currentImage.getAttribute('src')).not.toBe(previousAttr);
  });
});

describe('Expand Gallery', () => {
  test('onClick Expand Gallery should not change the div element', () => {
    const { container } = render(<Gallery styles={sampleData.results[0]} />);
    const coll = document.querySelector('.collapsible');
    const previousItem = coll;
    fireEvent.click(coll);

    expect(coll).toBe(previousItem);
  });
});

describe('Sliding Window for Mini Thumbnails', () => {
  test('Down onClick should change displayed thumbnails', () => {
    const GalleryComp = render(<Gallery styles={sampleData2.results[0]} />);
    const down = document.querySelector('.downbutton');
    const imageURL = document.querySelector('.miniimage').src;

    fireEvent.click(down);

    const newURL = document.querySelector('.miniimage').src;
    expect(imageURL).not.toBe(newURL);
  });

  test('Up onClick should change displayed thumbnails', () => {
    const GalleryComp = render(<Gallery styles={sampleData2.results[0]} />);
    const down = document.querySelector('.downbutton');
    fireEvent.click(down);
    const imageURL = document.querySelector('.miniimage').src;

    const up = document.querySelector('.upbutton');
    fireEvent.click(up);
    const newURL = document.querySelector('.miniimage').src;

    expect(imageURL).not.toBe(newURL);
  });

  test('onClick Right arrow should change displayed thumbnails if img is on next page', () => {
    const GalleryComp = render(<Gallery styles={sampleData2.results[0]} />);
    const rightArrow = GalleryComp.getByTestId('rightArrowImgGallery');
    const imageURL = document.querySelector('.miniimage').src;

    let i = 0;
    while (i < 7) {
      fireEvent.click(rightArrow);
      i += 1;
    }

    const newURL = document.querySelector('.miniimage').src;

    expect(imageURL).not.toBe(newURL);
  });

  test('onClick Left arrow should change displayed thumbnails if img is on next page', () => {
    const GalleryComp = render(<Gallery styles={sampleData2.results[0]} />);
    const rightArrow = GalleryComp.getByTestId('rightArrowImgGallery');
    const leftArrow = GalleryComp.getByTestId('leftArrowImgGallery');

    let i = 0;
    while (i < 7) {
      fireEvent.click(rightArrow);
      i += 1;
    }
    const imageURL = document.querySelector('.miniimage').src;
    fireEvent.click(leftArrow);
    fireEvent.click(leftArrow);
    const newURL = document.querySelector('.miniimage').src;

    expect(imageURL).not.toBe(newURL);
  });
});