import { Typography } from '@mui/material';
import React from 'react';
interface TextProps {
    text?:string;
    style?: React.CSSProperties;
    fontSize?:string,
    variant?:
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "button" | "caption" | "subtitle1" | "body2" | "inherit" | "subtitle2" | "overline" | undefined;
}
 const Text = ({ ...props }: TextProps) => {
    return (
        <Typography sx={props.style} variant={props.variant}>{props.text}</Typography>
    );
    }
export default Text;