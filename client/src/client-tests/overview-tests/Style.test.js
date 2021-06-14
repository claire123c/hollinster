/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import Overview from '../../components/overview/Overview.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';

describe('Style Title', () => {
  test('clicking thumbnail should change style title', () => {
    render(<Overview productID={25169} />);
    const title = document.querySelector('.style-title');


    expect(title).toBe('');
  });
});