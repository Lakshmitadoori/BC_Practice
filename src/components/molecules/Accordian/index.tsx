import * as React from "react";
import Accordion from "@mui/material/Accordion";
import Grid from "@mui/material/Grid";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoCard from "../Card";
import { Divider } from "@mui/material";

interface ICards {
  name: string;
  details: string;
  src?:string;
}
interface IProps {
  cards: ICards[];
  title?: string;
  content?: string;
}
const SimpleAccordion = (props: IProps) => {
  return (
    <div>
      <Accordion  role="accordian" data-testid="acc" >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-header">
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <Divider sx={{marginBottom:1.5,width:"1200px"}}  />
        <AccordionDetails>
          <Grid container spacing={2} sx={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {props.cards.map((card, index) => {
              return (
                <Grid item xs={8} key={index}>
                  <InfoCard title={card.name} content={card.details} src={card.src}></InfoCard>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;