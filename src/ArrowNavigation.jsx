import React from 'react';
import styled, { css } from 'styled-components';

const RightStyle = css`
  right: 5px;
`;
const LeftStyle = css`
  left: 5px;
`;
const NavigationButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  max-width: 100px;
  cursor: pointer;

  width: 35px;
  height: 35px;
  background: rgba(255,255,255,0.9);
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  ${(props) => (props.left ? LeftStyle : RightStyle)};
`;

const ArrowNavigation = ({
  onChangeIndex,
  index,
  slideCount,
  onMouseLeave,
  onMouseEnter,
  onTouchStart,
  onTouchEnd,
}) => [
  <NavigationButton
    key="next-nav"
    onClick={(e) => {
      e.preventDefault ();
      // eslint-disable-next-line no-unused-expressions
      (slideCount - 1 > index ? onChangeIndex (index + 1) : onChangeIndex (0));
    }}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  >
    <svg width={24} heigt={24} viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img" fill="#000" color="white">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  </NavigationButton>,
  <NavigationButton
    key="before-nav"
    width={[1 / 4]}
    onClick={(e) => {
      e.preventDefault ();
      // eslint-disable-next-line no-unused-expressions
      (index > 0 ? onChangeIndex (index - 1) : onChangeIndex (slideCount - 1));
    }}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    left
  >
    <svg width={24} heigt={24} viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img" fill="#000" color="white">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </NavigationButton>,
];

export default ArrowNavigation;
