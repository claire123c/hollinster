import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/question-answer/Search.jsx';

// does search bar render to screen
// should render proper placeholder message
// input typed should appear on the search bar