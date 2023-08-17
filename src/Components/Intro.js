import * as React from "react";
import { Typography, Box } from "@mui/material";
import "../PageCSS/Pages.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";

export default function First() {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);

  return (
    <div className="page-container">
      <div>
        <Box className="box-modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Sorsogon State University <br />
            Client Satisfaction Measurement
          </Typography>
          <Typography
            id="modal-modal-description"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            This short Client Satisfaction Measurement (CSM) survey aims to
            track the customer experience of government offices. Your answer
            will enable this office to provide a better service.
          </Typography>
        </Box>
      </div>
      <div className="intro-button-proceed">
        <Button
          variant="contained"
          onClick={() => setStep(2)}
          className="bottom-button"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
