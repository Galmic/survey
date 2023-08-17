import IntroStep from "./Components/Intro";
import FirstStep from "./Components/First";
import SecondStep from "./Components/Second";
import ThirdStep from "./Components/Third";
import FourthStep from "./Components/Fourth";
import FifthStep from "./Components/Fifth";
import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Pagination, Stack } from "@mui/material";
import { multiStepContext } from "./StepContext";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  function handlePaginationChange(event, value) {
    // Update the current step in your context or state
    // based on the selected pagination value (value).
    // You can use this value to determine which step to display.
  }

  function showStep(step) {
    switch (step) {
      case 1:
        return <IntroStep />;
      case 2:
        return <FirstStep />;
      case 3:
        return <SecondStep />;
      case 4:
        return <ThirdStep />;
      case 5:
        return <FourthStep />;
      case 6:
        return <FifthStep />;
      case 7:
        return <FirstStep />;
      default:
        return null;
    }
  }

  return (
    <div className="App" style={{ backgroundColor: "#E3F4F4" }}>
      <CssBaseline />
      <Container
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f9f5f6",
          height: "100vh",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img
            src={require("./img/sorsu.png")}
            alt="Logo"
            style={{ maxHeight: "100px", marginTop: "10px" }}
          />
          <img
            src={require("./img/arta.png")}
            alt="Logo"
            style={{ maxHeight: "100px", marginTop: "10px" }}
          />
        </div>

        <div style={{ marginTop: "10px", align: "center" }}>
          <Stack spacing={1}>
            <Pagination
              count={5}
              page={currentStep - 1}
              onChange={handlePaginationChange}
              size="small"
              color="primary"
              hidePrevButton
              hideNextButton
            />
          </Stack>
        </div>
        {showStep(currentStep)}
      </Container>
    </div>
  );
}

export default App;
