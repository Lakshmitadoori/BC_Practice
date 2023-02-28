import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface checkbocprops extends CheckboxProps {
  label: string;
  style?: React.CSSProperties;
}

const MuiCheckBox = ({
  label,
  checked,
  size,
  color,
  ...props
}: checkbocprops) => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            size={size}
            color={color}
            checked={checked}
            style={{
              left: 12,
              right: 12,
              width: 18,
              height: 18,
            }}
          />
        }
        label={<span style={props.style}>{label}</span>}
      />
    </>
  );
};

export default MuiCheckBox;
