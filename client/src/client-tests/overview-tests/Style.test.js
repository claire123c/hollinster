/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import Freeform from '../../components/overview/Info/Freeform.jsx';
import Info from '../../components/overview/Info/Info.jsx';
import averageRating from '../../components/overview/Info/Info-helper.jsx/star-helper.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';