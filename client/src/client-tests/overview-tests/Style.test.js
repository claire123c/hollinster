/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import Overview from '../../components/overview/Overview.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';

describe('Style Title', () => {
  test('clicking thumbnail should change style title', async (done) => {
    const OverviewComp = await render(<Overview productID={25167} />);

    jest.advanceTimersByTime(7000);


    const title = await screen.findByTestId('style-title');

    //console.log(OverviewComp);
    expect(title).toBe('');
    done();
  });
});
