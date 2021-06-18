/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Size from '../../components/overview/AddCart/Size.jsx';
import Cart from '../../components/overview/AddCart/Cart.jsx';
import { sampleData, sampleData2, emptyData } from '../../components/overview/sampleData.js';

describe('Size Selector Display', () => {
  test('sizes should be displayed if available', () => {
    const SizeComp = render(<Size skus={sampleData.results[0].skus} />);
    const sizeElement = document.querySelector('.size-selector');
    fireEvent.click(sizeElement);

    const size = SizeComp.getByText('S');

    expect('size').toBe('S');
  });

  test('Out of Stock should be displayed if not available', () => {
    const SizeComp = render(<Size />);
    const sizeElement = SizeComp.getByText('OUT OF STOCK').innerHTML;

    expect(sizeElement).toBe('OUT OF STOCK');
  });
});

xdescribe('Quantity Display', () => {
  test('quantity should be displayed if available', () => {
    const CartComp = render(<Cart currentStyle={sampleData.results[0]} />);
    const selector = CartComp.getByTestId('selector');
    fireEvent.change(selector, { target: { value: 828825 } });
    const quantity = document.querySelector('.quantity-selector');

    expect(quantity).not.toBe(null);
  });
  test('quantity should be not be displayed if it is not available', () => {
    render(<Cart currentStyle={sampleData.results[0]} />);
    const quantity = document.querySelector('.quantity-selector');

    expect(quantity).toBe(null);
  });
});
