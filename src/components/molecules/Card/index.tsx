import React from "react";
import {Card, ThemeProvider} from "@mui/material";
import { Typography } from "@mui/material";
import theme from "../../../theme";

interface Cards {
    title?:string;
    content?: string;
    src?:string;
    alt?:string;
}
const InfoCard =(props: Cards) =>{
    return (
        <>
        <ThemeProvider theme={theme}>
            <Card
            role="card" data-testid="cards" 
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "330.67px",
                    height: "62px",
                    backgroundColor: "#FAFAFC",
                    border: "1px solid #E5E7ED",
                    borderRadius: "12px"
                }}>
                <img src={props.src} style={{ marginLeft: 12 }} />
                <div style={{ margin: "10px" }}>
                    <Typography variant="body2" sx={{ color: theme.palette.textColor.mediumEmphasis }}>{props.title}</Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.textColor.highEmphasis }}>{props.content}</Typography>
                </div>
            </Card>
        </ThemeProvider>
        </>
    );
};
export default InfoCard;