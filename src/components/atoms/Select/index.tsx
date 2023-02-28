import React from "react";
import { Typography, Menu, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface Iprops {
  options: string[];
  size: "small" | "medium";
  hangleChange: (event: SelectChangeEvent) => void;
}

const Selection = (props: Iprops) => {
  const [page, setPage] = React.useState("0");
  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };
  const { options, size } = props;
  return (
    <Select value={page} displayEmpty onChange={handleChange} size={size}>
      {options.map((option, index) => {
        return (
          <MenuItem value={index.toString()}>
            <Typography variant="body1">{option}</Typography>
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default Selection;
