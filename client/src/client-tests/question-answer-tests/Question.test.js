// import dependencies
import React from 'react';
// import API mocking utilities from Mock Service Worker

import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/question-answer/Search.jsx';
