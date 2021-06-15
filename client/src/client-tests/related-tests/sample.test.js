/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import Related from '../../components/related/Related.jsx';
// import List from '../../components/related/List.jsx';
// import Card from '../../components/related/Card.jsx';

xdescribe('Related', () => {
  test('renders Related component', () => {
    render(<Related />);

    screen.debug();
  });
});