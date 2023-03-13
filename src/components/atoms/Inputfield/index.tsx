import {TextField } from "@mui/material";
import { useState } from 'react';
import React from "react";

interface InputProps {
    placeholder?: string;
    type?:string,
    maxLength: number,
    style: React.CSSProperties;
    handleChange?:() => void;
}

const Input = ({ ...props }: InputProps) => {

  const [message, setMessage] = useState('');
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

    return (
         <> 
        <TextField {...props}
            id="input-with-icon-textfield"
            variant="outlined"
            onChange={handleChange}  />
            <h5>input: {message}</h5>

            </>
            );
};

export default Input;

