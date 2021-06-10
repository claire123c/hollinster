import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Info() {

  return (
    <div className="productinfo">
      <div className="name">Name</div>
      <div className="category">Category</div>
      <div className="price">Price</div>
    </div>
  );
};

export default Info;
