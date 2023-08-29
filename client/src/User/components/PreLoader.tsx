import React from 'react';

import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0%, 100% {
    transform: translate(0);
  }
  25% {
    transform: translate(160%);
  }
  50% {
    transform: translate(160%, 160%);
  }
  75% {
    transform: translate(0, 160%);
  }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

export const StyledHR = styled.hr`
  border: 0;
  margin: 0;
  width: 40%;
  height: 40%;
  position: absolute;
  border-radius: 50%;
  animation: ${spinAnimation} 2s ease infinite;

  &:nth-child(1) {
    background: #19a68c;
    animation-delay: -1.5s;
  }

  &:nth-child(2) {
    background: #f63d3a;
    animation-delay: -1s;
  }

  &:nth-child(3) {
    background: #fda543;
    animation-delay: -0.5s;
  }

  &:nth-child(4) {
    background: #193b48;
  }
`;

export default () => {
    return <StyledLoader>
        <StyledHR /><StyledHR /><StyledHR /><StyledHR />
    </StyledLoader>
}