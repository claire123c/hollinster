/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import { sampleData, sampleData2 } from '../../components/overview/sampleData.js';

describe('Star Rating', () => {
  test('star rating gives average rating', () => {
    const reviews = {
      results: [{ rating: 5 }, { rating: 2 }],
    };

    render(<Star reviews={reviews} />);
    const starElement = document.querySelector('.stars');

    expect(starElement).toBe('.35');
  });

  test('star rating gives no rating to array with no ratings', () => {
    const empty = {
      results: [],
    };
    const InfoComp = render(<Star reviews={empty} />);
    const starElement = document.querySelector('.stars').getAttribute('stars');

    expect(starElement).toBe(0);
  });
});
