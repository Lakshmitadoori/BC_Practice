import {InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface InputProps {
    placeholder?: string;
    type?:string,
    maxLength?: number,
    style?: React.CSSProperties;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({ ...props }: InputProps) => {
    return (
         <> 
        <TextField {...props}
            id="input-with-icon-textfield"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <SearchOutlinedIcon/> </InputAdornment>
            }} 
            role="icon"
            data-testid="icontext"
            placeholder="Search any Candidate" 
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props.onChange(event)
            }
    
              />
            </>
            );
};

export default Input;