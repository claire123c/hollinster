/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import Overview from '../../components/overview/Overview.jsx';
import AllStyles from '../../components/overview/StyleSelector/AllStyles.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';

describe('Style Title', () => {
  test('style title should be displayed', (done) => {
    const style = { name: 'Green', style_id: 2 };
    render(<AllStyles currentStyle={style} />);
    const title = document.querySelector('.style-title');

    console.log(title);
    expect(title.innerHTML).toBe('GREEN');
    done();
  });
});
