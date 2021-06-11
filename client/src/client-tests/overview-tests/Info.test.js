/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime'
import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import { sampleData, sampleData2 } from '../../components/overview/sampleData.js';

describe('Star Rating', () => {
  test('star rating shows given ratings', () => {
    const reviews = {
      results: [{ rating: 5 }, { rating: 2 }, { rating: 4 }],
    };
    render(<Star reviews={reviews} />);
    const starElement = document.querySelector('.innerstars').innerHTML;

    expect(starElement).toBe('★★★★★');
  });

  test('star rating should be hidden with no ratings', () => {
    const empty = {
      results: [],
    };
    render(<Star reviews={empty} />);
    const starElement = document.querySelector('.stars');

    expect(starElement).toBe(null);
  });
});
