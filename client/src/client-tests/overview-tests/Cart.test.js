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

    const size = SizeComp.getByText('S').innerHTML;

    expect(size).toBe('S');
  });

  test('Out of Stock should be displayed if not available', () => {
    const SizeComp = render(<Size />);
    const sizeElement = SizeComp.getByText('OUT OF STOCK').innerHTML;

    expect(sizeElement).toBe('OUT OF STOCK');
  });
});

describe('Quantity Display', () => {
  test('quantity should be displayed if available', () => {
    const CartComp = render(<Cart currentStyle={sampleData.results[0]} />);
    const sizeElement = document.querySelector('.size-selector');
    fireEvent.click(sizeElement);
    const sizeS = CartComp.getByText('S');
    fireEvent.click(sizeS);
    const quantity = CartComp.getByText('1').innerText;

    expect(quantity).not.toBe(null);
  });
  test('quantity dropdown should be displayed if clicked on', () => {
    const CartComp = render(<Cart currentStyle={sampleData.results[0]} />);
    const sizeElement = document.querySelector('.size-selector');
    fireEvent.click(sizeElement);
    const sizeS = CartComp.getByText('S');
    fireEvent.click(sizeS);
    const quantity = CartComp.getByText('1');
    fireEvent.click(quantity);
    const shownQuantity = CartComp.getByText('2').innerHTML;

    expect(shownQuantity).toBe('2');
  });
  test('quantity should be not be displayed if it is not available', () => {
    render(<Cart currentStyle={sampleData.results[0]} />);
    const quantity = document.querySelector('.quantity-selector');

    expect(quantity).toBe(null);
  });
});
