import React from "react";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface IOptions {
  value: string;
  label: string;
}
interface IProps {
  options: IOptions[];
  size?: "small" | "medium";
  height?: number;
  width?: number;
  handleChange: (event: SelectChangeEvent) => void;
}

const Selection = (props: IProps) => {
  const [page, setPage] = React.useState("10");
  const { options, size, height, width, handleChange } = props;
  return (
    <Select
      value={page}
      onChange={(event) => {
        setPage(event.target.value);
        handleChange(event);
      }}
      size={size}
      sx={{ height: `${height}px`, width: `${width}px` }}
    >
      {options.map((option, index) => {
        return (
          <MenuItem value={option.value} key={index} data-testid={index}>
            <Typography variant="caption2" color='#2C2C2E'>{option.label}</Typography>
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default Selection;
