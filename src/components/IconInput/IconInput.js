import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    top: 0,
    size: 24,
  },
  large: {
    fontSize: 18,
    top: 0,
    size: 28,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error("Unknown size of the progressbar: ${size}");
  }

  return (
    <SearchBar size={size} style={{ "--width": width + "px" }}>
      <Icon
        id={icon}
        size={styles.size}
        style={{
          position: "absolute",
          top: styles.top + "px",
          color: COLORS.gray700,
        }}
      ></Icon>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputElement
        type="text"
        placeholder={placeholder}
        style={{ "--fontSize": styles.fontSize + "px" }}
      />
    </SearchBar>
  );
};

const SearchBar = styled.div`
  position: relative;
  width: var(--width);
`;

const InputElement = styled.input`
  font-family: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  padding: 4px 10px 4px 36px;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
