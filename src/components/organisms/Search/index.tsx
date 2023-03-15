import React, { useEffect, useState } from "react";
import {Card,Stack, Typography } from "@mui/material";
import IconText from "../../molecules/IconText";
import CandidateList from "../CandidateList";

interface SearchProps {
   height?:number,
    style?: React.CSSProperties;
 }
 const Search = ({ ...props }: SearchProps) => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
  
  // useEffect(() => {
  //   setFilteredcandidates(
  //     candidates.filter((candidate: { name: string; }) =>
  //       candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   setStatusData();
  // }, [searchTerm, candidates, filter]);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };
    return (
         <> 
           <Card sx={{ maxWidth: 1050,height:"5vw",background:"#FFFFFF" }}>
          <Stack direction="row" spacing={45} sx={{display: "flex", flexWrap: "wrap"}}>
            <Typography variant="subtitle1" sx={{fontFamily: 'Inter',fontStyle: "normal",fontWeight: "500",fontSize: "16px",mt:2,ml:3}}>Candidate Information</Typography>
            {/* <IconText  handleChange={handleInputChange}/> */}
            </Stack>
            </Card>
            <CandidateList />
            </>
            );
};

export default Search;
