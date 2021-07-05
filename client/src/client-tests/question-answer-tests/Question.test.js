/**
 * @jest-environment jsdom
 */
// import dependencies
import React from 'react';
// // import API mocking utilities from Mock Service Worker
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import react-testing methods
import { render } from '@testing-library/react';
// add custom jest matchers from jest-dom
// import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/question-answer/Search.jsx';

describe('Search bar', () => {
  test('Search bar exists', () => {
    const SearchBar = render(<Search />);
    const searchInput = SearchBar.getByTestId('searchInput');
    expect(searchInput.getAttribute('placeholder')).toBe('HAVE A QUESTION? SEARCH FOR ANSWERS...');
  });
});
