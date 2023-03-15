import {Card, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CandidateList from "../../organisms/CandidateList";

interface InputProps {
    placeholder?: string;
    type?:string,
    maxLength?: number,
    style?: React.CSSProperties;
    handleChange:() => void;
}

const Input = ({ ...props }: InputProps) => {
    return (
         <> 
          <Card sx={{ maxWidth: 1050,height:"5vw",background:"#FFFFFF" }}>
          <Stack direction="row" spacing={45} sx={{display: "flex", flexWrap: "wrap"}}>
            <Typography variant="subtitle1" sx={{fontFamily: 'Inter',fontStyle: "normal",fontWeight: "500",fontSize: "16px",mt:2,ml:3}}>Candidate Information</Typography>
            
        <TextField {...props}
            id="input-with-icon-textfield"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <SearchOutlinedIcon/> </InputAdornment>
            }} 
            role="icon"
            data-testid="icontext"
            placeholder="Search any Candidate" />

            </Stack>
            </Card>
            <CandidateList />
            </>
            );
};

export default Input;


