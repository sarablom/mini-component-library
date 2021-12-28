/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error("Unknown size of the progressbar: ${size}");
  }

  return (
    <>
      <ProgressElement
        size={size}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--padding": styles.padding + "px",
          "--radius": styles.radius + "px"
        }}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar
          style={{ 
            "--width": value + "%", 
            "--height": styles.height + "px",
           }}
        ></Bar>
      </ProgressElement>
    </>
  );
};

const ProgressElement = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
  //To trim off corners from progressbar
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
