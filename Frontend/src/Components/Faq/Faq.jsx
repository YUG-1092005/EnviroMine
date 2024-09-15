import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Faq.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
  borderBottomLeftRadius: theme.spacing(2),
  borderBottomRightRadius: theme.spacing(2),

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#D8EFD3",
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="faq-heading">
        <h2
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#1d4343" }}
        >
          FAQ's
        </h2>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                What is a carbon calculator?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                A carbon calculator is a tool designed to estimate the amount of
                carbon dioxide (CO2) emissions produced by an individual,
                organization, or activity. It helps users understand their
                carbon footprint, which is a measure of the total greenhouse
                gases they are responsible for emitting, directly or indirectly.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                Is my data secure with EnviroMine?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                Yes, we prioritize the privacy and security of your data. All
                information entered into the app is kept confidential and is not
                shared with third parties without your consent.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                How can I learn more about reducing my emissions?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                Our app provides personalized insights and actionable
                recommendations to help you reduce your carbon footprint.
                Additionally, you can explore our blog and resources section for
                tips and strategies on sustainable practices.All this features
                are coming soon on EnviroMine.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                How can I access real-time emission data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                Real-time emission data can be accessed through our dedicated
                online platform, where you can view live metrics on emissions
                from coal mining, electricity usage, and ventilation systems.
                Our platform provides detailed reports and visualizations to
                help you understand and monitor emission levels and also
                suggesting you to plant trees in what number.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                How do you handle feedback and complaints?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                We value feedback from our stakeholders and are committed to
                addressing any concerns or complaints promptly. You can provide
                feedback through our online form, email, or directly to our
                customer service team. We review all feedback carefully and take
                appropriate actions to improve our practices and address any
                issues.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
              style={{ height: "5rem" }}
            >
              <Typography style={{ fontSize: "1.5rem" }} className="faq-que">
                How do you ensure safety and compliance in your operations?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                We adhere to strict safety and compliance standards set by
                governmental and regulatory bodies. Our operations are regularly
                inspected and audited to ensure that we meet safety requirements
                and environmental regulations. We also implement comprehensive
                safety training programs for our staff.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="showcasing-join" style={{ marginTop: "6rem" }}>
        <h2 className="having-que">Having More Queries?</h2>
        <div className="join-content">
          <h2>Contact Us</h2>
          <lord-icon
            src="https://cdn.lordicon.com/whtfgdfm.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
        </div>
      </div>
    </div>
  );
}
