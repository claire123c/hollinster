/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import Overview from '../../components/overview/Overview.jsx';
import AllStyles from '../../components/overview/StyleSelector/AllStyles.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';

jest.mock('axios');

describe('Style Title', () => {
  test('style title should be displayed', () => {
    const style = { name: 'Green', style_id: 2 };
    render(<AllStyles currentStyle={style} />);
    const title = document.querySelector('.style-title');

    expect(title.innerHTML).toBe('GREEN');
  });
  test('clicking image should change style title', async () => {
    const resp = { data: sampleData };
    let OverviewComp;

    axios.get.mockResolvedValue(resp);
    await act(async () => {
      OverviewComp = await render(<Overview productID={25167} />);
    });
    const thumbnail = document.querySelector('.style-photo');
    console.log(thumbnail.src);
    const title = document.querySelector('.style-title').innerHTML;
    fireEvent.click(thumbnail);
    const newTitle = document.querySelector('.style-title');

    console.log(newTitle.innerHTML);



    expect(title).toBe(newTitle.innerHTML);


  });
});
