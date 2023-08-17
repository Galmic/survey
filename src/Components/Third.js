import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, TextField } from "@mui/material";
import "../PageCSS/Pages.css";

export default function Third({ handleCloseModal }) {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);

  const [selectCustomerType, setSelectCustomerType] = React.useState("");

  const [openCustomerType, setOpenCustomerType] = React.useState(false);

  const [inputCustomerOthers, setInputCustomerOthers] = React.useState("");

  const [inputFocused, setInputFocused] = React.useState(false);

  const handleChangeCustomerType = (event) => {
    setSelectCustomerType(event.target.value);
    setUserData({ ...userData, CustomerType: event.target.value });
  };

  const handleChangeCustomerOthers = (event) => {
    setInputCustomerOthers(event.target.value);
    setUserData({ ...userData, CustomerOthers: event.target.value });
  };

  const handleCloseCustomerType = () => {
    setOpenCustomerType(false);
  };
  const handleOpenCustomerType = () => {
    setOpenCustomerType(true);
  };

  const handleTextFieldFocus = () => {
    setInputFocused(true);
  };

  const handleTextFieldBlur = () => {
    if (inputCustomerOthers === "") {
      setInputFocused(false);
    }
  };

  return (
    <div className="page-container">
      <div>
        <FormControl className="page-content">
          <InputLabel id="demo-controlled-open-select">
            Customer type
          </InputLabel>
          <Select
            id="demo-controlled-open-select"
            open={openCustomerType}
            onClose={handleCloseCustomerType}
            onOpen={handleOpenCustomerType}
            value={userData["CustomerType"] || ""}
            label="selectCustomerType"
            onChange={handleChangeCustomerType}
            className="custom-form-control"
          >
            <MenuItem value="">
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem value="citizen">Citizen</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="government">Government</MenuItem>
            <MenuItem value="citizen-others">Others</MenuItem>
          </Select>
        </FormControl>
        {/* CUTOMER TYPE - CITIZEN */}
        {userData.CustomerType === "citizen" && (
          <div className="page-content"></div>
        )}
        {/* CUTOMER TYPE - BUSINESS */}
        {userData.CustomerType === "business" && (
          <div className="page-content"></div>
        )}
        {/* CUTOMER TYPE - GOVERNMENT */}
        {userData.CustomerType === "government" && (
          <div className="page-content"></div>
        )}
        {/* CUTOMER TYPE - OTHERS */}
        {userData.CustomerType === "customer-others" && (
          <div className="page-content">
            <FormControl>
              <InputLabel
                id="select-others-label"
                className={inputFocused ? "shrink" : ""}
              ></InputLabel>
              <div className="custom-form-control">
                <TextField
                  className="page-content"
                  labelId="select-others-label"
                  id="demo-controlled-open-select"
                  type="text"
                  value={userData["customer-others"]}
                  onChange={handleChangeCustomerOthers}
                  label="Please Specify"
                  onFocus={handleTextFieldFocus}
                  onBlur={handleTextFieldBlur}
                />
              </div>
            </FormControl>
          </div>
        )}
      </div>
      {userData.CustomerType === "citizen-others" && (
        <div className="page-content">
          <FormControl>
            <InputLabel
              id="select-others-label"
              className={inputFocused ? "shrink" : ""}
            ></InputLabel>
            <div className="custom-form-control">
              <TextField
                className="page-content"
                id="demo-controlled-open-select"
                type="string"
                value={userData["CustomerOthers"] || ""}
                onChange={handleChangeCustomerOthers}
                label="Please Specify"
                onFocus={handleTextFieldFocus}
                onBlur={handleTextFieldBlur}
              />
            </div>
          </FormControl>
        </div>
      )}
      <div className="page-content">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: "15px" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setStep(3);
            }}
            className="bottom-button"
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => setStep(5)}
            className="bottom-button"
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  );
}
