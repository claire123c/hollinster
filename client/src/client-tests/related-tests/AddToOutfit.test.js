/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddToOutfit from '../../components/related/AddToOutfit.jsx';

test('it renders a +', () => {
  const outfitComponent = render(<AddToOutfit />);
  expect(outfitComponent.getByText('+').innerHTML).toBe('+');
});
