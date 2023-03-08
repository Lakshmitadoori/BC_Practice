import React from "react";
import { Typography, Menu, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface Iprops {
  options: string[];
  size?: "small" | "medium";
  height?: number;
  width?: number;
  variant?:
    | "inherit"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline";
  hangleChange?: (event: SelectChangeEvent) => void;
}

const Selection = (props: Iprops) => {
  const [page, setPage] = React.useState("0");
  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };
  const { options, size, height, width, variant } = props;
  return (
    <Select
      value={page}
      onChange={handleChange}
      size={size}
      sx={{ height: `${height}px`, width: `${width}px` }}
    >
      {options.map((option, index) => {
        return (
          <MenuItem value={index.toString()} key={index} data-testid={index}>
            <Typography variant={variant}>{option}</Typography>
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default Selection;