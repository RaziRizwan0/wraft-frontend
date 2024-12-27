import styled, { th } from "@xstyled/emotion";

import { SearchOptions } from "./index";

import { defaultFieldStyles, overflowEllipsis } from "@/utils";

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled("input")<SearchOptions>`
  position: relative;
  ${({ iconPlacement, size, transparent, variant }) =>
    defaultFieldStyles({
      iconPlacement,
      size,
      variant,
      transparent,
      isClearable: true,
    })}
  ${overflowEllipsis}
 br {
    display: none;
  }
`;

export const Menu = styled.ul`
  ${th("defaultFields.select.default")};
  position: absolute;
  color: neutral-90;
  z-index: 2;
  right: 0;
  left: 0;
  margin: 0;
  margin-top: md;
  padding: 0;
  transition: medium;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Item = styled.li<{
  isExisting?: boolean;
  isHighlighted?: boolean;
  isSelected?: boolean | undefined;
}>`
  color: beige-70;
  ${({ isHighlighted }) =>
    isHighlighted && th("defaultFields.select.highlighted")};
  ${({ isSelected }) => isSelected && th("defaultFields.select.selected")};
  ${({ isExisting }) => isExisting && th("defaultFields.select.existing")};
  ${({ isSelected, isHighlighted }) =>
    isSelected &&
    isHighlighted &&
    th("defaultFields.select.selectedAndHighlighted")};
  ${overflowEllipsis};
  padding: sm;
  list-style: none;
  text-decoration: none;
  font-size: sm;
  transition: background ${th.transition("medium")};
`;

export const Indicators = styled.div`
  position: absolute;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
`;

export const DropDownIndicator = styled.button<{
  isOpen?: boolean;
  size: SearchOptions["size"];
}>`
  position: relative;
  height: 100%;
  cursor: ${(size) => size && th("defaultFields.select.selected")};
  padding: 0;
  outline: none !important; /* important for firefox */
  appearance: none;
  cursor: pointer;
  border: none;
  background: transparent;

  &:not(:last-child) {
    width: auto;
  }
`;
