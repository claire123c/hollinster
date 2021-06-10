import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Info({ productInfo }) {
  const { name, category, default_price} = productInfo;
  return (
    <div className="productinfo">
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="price">{default_price}</div>
    </div>
  );
};

export default Info;
