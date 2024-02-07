import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import "./Accordion.css";

export default function AccordionUsage() {
  return (
    <div className="accordion-container">
      <Accordion sx={{ fontSize: "2em", margin: "10px 0" }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Diseñamos, armamos y planificamos huertas
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quod asperiores eligendi
          magni reiciendis a sapiente? Ad quo, qui mollitia itaque inventore
          labore, dolorem iusto consequuntur eum culpa porro repellat illo.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, quis.
          Quod illo velit a laboriosam, veniam unde quaerat ut earum optio
          harum. Praesentium fugit, quod
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ fontSize: "2em", margin: "10px 0" }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Capacitaciones de Huerta y Compostaje
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ fontSize: "2em", margin: "10px 0" }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Composteras
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ fontSize: "2em", margin: "10px 0" }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Composteras
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
