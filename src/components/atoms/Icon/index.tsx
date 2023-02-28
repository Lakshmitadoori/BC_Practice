import React from "react";

interface IconProps {
  color: "disabled" | "action" | "inherit" | "primary"| "secondary" | "error" | "info" | "success" | "warning" | undefined;
  size: "inherit" | "small" | "large" | "medium" | undefined;
  style?: React.CSSProperties;
  src?:string;
  alt?:string;
}

const MuiIcon = ({...props}: IconProps) => {
  return (
    <img src={props.src} alt={props.alt} style={props.style}/> 
  );
};
export default MuiIcon;