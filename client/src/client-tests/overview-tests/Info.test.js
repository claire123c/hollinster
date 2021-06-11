/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime'
import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import Info from '../../components/overview/Info/Info.jsx';
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

describe('Sales price', () => {
  test('Sales price should be displayed if there is sales price', () => {
    render(<Info styles={sampleData2.results[7]} />);
    const sales = document.querySelector('.sales');

    expect(sales.innerHTML).toBe('$400.00');
  });

  test('Sales price should not be displayed if null', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const sales = document.querySelector('.sales');

    expect(sales).toBe(null);
  });
});

describe('Social Media', () => {
  test('Fb share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.fb-share-button');

    expect(button).toBeDefined();
  });

  test('Twitter share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.twitter-follow-button');

    expect(button).toBeDefined();
  });

  test('Pinterest share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.pinterest-save-button');

    expect(button).toBeDefined();
  });
})