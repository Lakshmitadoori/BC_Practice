import React, { useEffect, useState } from "react";
import {Card,Stack, Typography } from "@mui/material";
import IconText from "../../molecules/IconText";
import CandidateList from "../CandidateList";
import axios from "axios";

interface SearchProps {
   height?:number,
    style?: React.CSSProperties;
 }
 const Search = ({ ...props }: SearchProps) => {
  let initial = [];
  const [posts, setPosts] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const fetchPosts = async () => {
    const result = await axios.get("http://localhost:3000/profile");
    setPosts(result.data);
  };
  React.useEffect(() => {
    fetchPosts();
  }, []);
  const searchPosts =(searchTerm:any)=>{
    setPosts(
       posts.filter((post: { name: string; }) =>
         post.name.toLowerCase().includes(searchTerm.toLowerCase())
       )
     );
   }
    return (
         <> 
           <Card sx={{ maxWidth: 1050,height:"5vw",background:"#FFFFFF" }}>
          <Stack direction="row" spacing={45} sx={{display: "flex", flexWrap: "wrap"}}>
            <Typography variant="subtitle1" sx={{fontFamily: 'Inter',fontStyle: "normal",fontWeight: "500",fontSize: "16px",mt:2,ml:3}}>Candidate Information</Typography>
            <IconText onChange={(event) => searchPosts(event.target.value)}/>
            </Stack>   
            </Card>
            <CandidateList searchTerm={searchTerm} posts={posts} />
            </>
            );
};

export default Search;