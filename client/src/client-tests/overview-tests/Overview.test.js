/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import axios from 'axios';
import sampleData from '../../components/overview/sampleData.js';

import Overview from '../../components/overview/Overview.jsx';


//API tests need to be edited
describe('API Calls', () => {
  it('should get product styles', () => {
    const OverviewComp = render(<Overview />);
    const gallery = document.querySelector('.defaultview');
    expect(gallery.src).toBe(undefined);
    // const resp = sampleData;
    // axios.get.mockResolvedValue(resp);

    // return Overview.all()
    //   .then((data) => (
    //     expect(data).toEqual()
    //   ));
  });
});
