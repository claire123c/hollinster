/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Gallery from '../../components/overview/ImgGallery/Gallery.jsx';
import { sampleData, sampleData2 } from '../../components/overview/sampleData.js';