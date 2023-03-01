import * as React from "react";

import Chip from "@mui/material/Chip";
import theme from "../../../theme";

interface ChipProps {
  label?: "CLEAR" | "CONSIDER" | "ENGAGE" | "SCHEDULED" | "ADVERSE ACTION";
  variant?: "outlined" | "filled" | undefined;
  background?: string | undefined;
  color?: string | undefined;
}

const MuiChip: React.FC<ChipProps> = ({
  label,
  variant,
  background,
  color,
}: ChipProps) => {
  return (
    <>
      <Chip
        role="button"
        label={label}
        variant={variant}
        sx={{
          fontFamily: theme.typography.caption.fontFamily,
          borderRadius: "4px",
          color,
          background,
        }}
      ></Chip>
    </>
  );
};
export default MuiChip;
