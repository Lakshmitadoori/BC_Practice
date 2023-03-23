import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
interface TextProps {
    text?:string;
    style?: React.CSSProperties;
    fontSize?:string,
    variant?:
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "button" | "caption" | "subtitle1" | "body2" | "inherit" | "subtitle2" | "overline" | undefined;
}
 const GifTypo = ({ ...props }: TextProps) => {
    return (
        <Card sx={{ maxWidth: 696,height:"33vw",borderRadius:"6px" }}>
            <img src="https://s3-alpha-sig.figma.com/img/aad3/06a2/3afadaa3c58d0cb0856245ea50b7d913?Expires=1679270400&Signature=TLh3TkUkbravqyBOQKp027kiBcCb8jVeV5uro6mAIUS5i7hQAdNq-siSqk9CWp4pHBPrCIuFIntoa-Jwowkf8O6azabssAhbixchW8WTA14KSnu42CdRrutovk1XaCTQH2SuJfJMr7KjnIOvaqWxW1iAkLJ~k5GWmIm2sYZJktsw5ZW6TgW9P0oUXSU6Kz1MuERpZx1qj4kTxmWXJM72anSJTLUFBhM4YzfSlUr~a7FUtcNSbRAEXmsdd8vwTuZ3ee-lXCPli~b135QuDQgh9Pmqhndnj7jpsbAdBzczooW-W3qoA7xGNaBVSKtTh3i9hgXtHpTRp3WtPGqYjNS3Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" height="200" width="200" style={{marginLeft:"200px",marginTop: "81px"}}/>
            <CardContent>
        <Typography sx={props.style} variant={props.variant}>{props.text}</Typography>
        </CardContent>
        </Card>
    );
    }
export default GifTypo;