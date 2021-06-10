/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import { sampleData, sampleData2 } from '../../components/overview/sampleData.js';

describe('Star Rating', () => {
  test('star rating gives average rating', () => {
    let reviews = {
      results: [{rating: 5}, {rating: 2}],
    };
    const InfoComp = render(<Star reviews={reviews}/>);
    const starElement = document.querySelector('.stars').innerHTML;

    expect(starElement).toBe('5');
  });
});
