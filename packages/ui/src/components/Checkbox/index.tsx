import React from "react";

import { DefaultFieldStylesProps } from "../../utils/field-styles";

import * as S from "./styles";

import { CreateWuiProps, forwardRef } from "@/system";

export interface CheckboxOptions extends DefaultFieldStylesProps {
  Component?: React.ElementType;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CheckboxProps = CreateWuiProps<"input", CheckboxOptions>;

export const Checkbox = forwardRef<"input", CheckboxProps>(
  (
    {
      checked = false,
      Component = S.Checkbox,
      dataTestId,
      disabled,
      indeterminate = false,
      name,
      onChange,
      size,
      ...rest
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.checked = !e.target.checked;
      onChange && onChange(e);
    };

    return (
      <Component
        checked={checked}
        data-testid={dataTestId}
        disabled={disabled}
        id={name}
        indeterminate={indeterminate}
        name={name}
        onChange={handleChange}
        ref={ref}
        size={size}
        {...rest}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
