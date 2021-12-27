/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <input type="range" min="0" max="100" value={value} />
    </>
  );
};

const ProgressElement = styled.input `
background: ${COLORS.transparentGray15};
` 

export default ProgressBar;
