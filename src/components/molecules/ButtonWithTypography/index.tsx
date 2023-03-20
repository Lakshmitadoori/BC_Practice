import React from 'react';
import { Stack } from '@mui/material';
import MuiTypography from '../../atoms/Typography';
import MuiButton from '../../atoms/Button';

interface ButtonWithTypographyProps {
  direction?:"row"| "row-reverse" | "column" | "column-reverse";
  variant?:"text" | "contained" | "outlined" ;
  onClick?: () => void;
  buttonLabel?: string;
  typographyText?: string;
  justifyContent?:"flex-start" | "flex-end" | "center" | "space-between" |"space-around" | "space-evenly";
  alignItems?: "flex-start" | "center" |  "flex-end" | "stretch" | "baseline";
  spacing?:number;
  typovariant?: "body1" | "body2" | "h1" |"h2" |"h3"|"h4"|"h5" |"h6";
  color?:string;
  buttoncolor?:string;
  fontFamily?:string;
}

const ButtonWithTypography: React.FC<ButtonWithTypographyProps> = ({
  direction,
  variant,
  onClick,
  buttonLabel,
  typographyText,
  justifyContent,
  alignItems,
  spacing,
  typovariant,
  color,
  buttoncolor,
  fontFamily,
}) => {
  
  return (
    <Stack direction={direction} justifyContent={justifyContent} alignItems={alignItems} spacing={spacing} >
      <MuiButton variant={variant} onClick={onClick} children={buttonLabel} sx={{color:buttoncolor,fontFamily:fontFamily}}/>
      <MuiTypography variant={typovariant} children={typographyText} sx={{color:color}}  />
    </Stack>
  );
};

export default ButtonWithTypography;
