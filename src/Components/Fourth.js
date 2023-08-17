import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
  FormLabel,
} from "@mui/material";
import "../PageCSS/Pages.css";

export default function Forth({ handleCloseModal }) {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);

  const [selectcc1, setSelectcc1] = React.useState("");

  const [opencc1, setOpencc1] = React.useState(false);

  const handleChangecc1 = (event) => {
    setSelectcc1(event.target.value);
    setUserData({ ...userData, cc1: event.target.value });
  };

  const handleClosecc1 = () => {
    setOpencc1(false);
  };
  const handleOpencc1 = () => {
    setOpencc1(true);
  };

  const [selectcc2, setSelectcc2] = React.useState("");

  const [opencc2, setOpencc2] = React.useState(false);

  const handleChangecc2 = (event) => {
    setSelectcc2(event.target.value);
    setUserData({ ...userData, cc2: event.target.value });
  };

  const handleClosecc2 = () => {
    setOpencc2(false);
  };
  const handleOpencc2 = () => {
    setOpencc2(true);
  };

  const [selectcc3, setSelectcc3] = React.useState("");

  const [opencc3, setOpencc3] = React.useState(false);

  const handleChangecc3 = (event) => {
    setSelectcc3(event.target.value);
    setUserData({ ...userData, cc3: event.target.value });
  };

  const handleClosecc3 = () => {
    setOpencc3(false);
  };
  const handleOpencc3 = () => {
    setOpencc3(true);
  };

  return (
    <div className="page-container">
      <div>
        <FormLabel
          component="legend"
          id="fourth-radios"
          sx={{ color: "black", marginBottom: "10px" }}
        >
          CC1: Which of the following best describes your awareness of a CC
          (Citizen's Charter)?
        </FormLabel>
        <FormControl className="page-content">
          <InputLabel id="select-cc1-label">CC1</InputLabel>
          <Select
            labelId="select-cc1-label"
            id="demo-controlled-open-select"
            open={opencc1}
            onClose={handleClosecc1}
            onOpen={handleOpencc1}
            value={userData["cc1"] || ""}
            label="selectcc1"
            onChange={handleChangecc1}
            style={{ width: "260px", whiteSpace: "normal", fontSize: "0.8rem" }}
          >
            <MenuItem
              value=""
              style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
            >
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem
              value="cc1-1"
              style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
            >
              1. I know what a CC is and I saw this office’s CC
            </MenuItem>
            <MenuItem
              value="cc1-2"
              style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
            >
              2. I know what a CC is but I did NOT see this office’s CC
            </MenuItem>
            <MenuItem
              value="cc1-3"
              style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
            >
              3. I learned of the CC only when I saw this office’s CC
            </MenuItem>
            <MenuItem
              value="cc1-4"
              style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
            >
              4. I do not know what a CC is and I did not see one in this
              office.
            </MenuItem>
          </Select>
        </FormControl>
        {/* CC2 */}
        {(userData.cc1 === "cc1-1" ||
          userData.cc1 === "cc1-2" ||
          userData.cc1 === "cc1-3") && (
          <div className="page-content">
            <FormLabel
              component="legend"
              id="fourth-radios"
              sx={{ color: "black", marginBottom: "10px", marginTop: "10px" }}
            >
              CC2: would you say that the CC (Citizen's Charter) of this office
              was?
            </FormLabel>
            <FormControl className="page-content">
              <InputLabel id="select-cc2-label">CC2</InputLabel>
              <Select
                labelId="select-cc2-label"
                id="demo-controlled-open-select"
                open={opencc2}
                onClose={handleClosecc2}
                onOpen={handleOpencc2}
                value={userData["cc2"] || ""}
                label="selectcc2"
                onChange={handleChangecc2}
                style={{
                  width: "260px",
                  whiteSpace: "normal",
                  fontSize: "0.8rem",
                }}
              >
                <MenuItem
                  value=""
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  <em>Cancel Selection</em>
                </MenuItem>
                <MenuItem
                  value="cc2-1"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  1. Easy to see
                </MenuItem>
                <MenuItem
                  value="cc2-2"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  2. Somewhat easy to see
                </MenuItem>
                <MenuItem
                  value="cc2-3"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  3. Difficult to see
                </MenuItem>
                <MenuItem
                  value="cc2-4"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  4. Not visible at all
                </MenuItem>
                <MenuItem
                  value="cc2-5"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  4. N/A
                </MenuItem>
              </Select>
            </FormControl>

            <FormLabel
              component="legend"
              id="fourth-radios"
              sx={{ color: "black", marginBottom: "10px", marginTop: "10px" }}
            >
              CC3: how much did the CC (Citizens Charter) help you in your
              transaction?
            </FormLabel>
            <FormControl className="page-content">
              <InputLabel id="select-cc3-label">CC3</InputLabel>
              <Select
                labelId="select-cc3-label"
                id="demo-controlled-open-select"
                open={opencc3}
                onClose={handleClosecc3}
                onOpen={handleOpencc3}
                value={userData["cc3"] || ""}
                label="selectcc3"
                onChange={handleChangecc3}
                style={{
                  width: "260px",
                  whiteSpace: "normal",
                  fontSize: "0.8rem",
                }}
              >
                <MenuItem
                  value=""
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  <em>Cancel Selection</em>
                </MenuItem>
                <MenuItem
                  value="cc3-1"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  1. Helped very much
                </MenuItem>
                <MenuItem
                  value="cc3-2"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  2. Somewhat helped
                </MenuItem>
                <MenuItem
                  value="cc3-3"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  3. Did not help
                </MenuItem>
                <MenuItem
                  value="cc3-4"
                  style={{ whiteSpace: "normal", fontSize: "0.8rem" }}
                >
                  4. N/A
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </div>
      <div className="page-content">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: "15px" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setStep(4);
            }}
            className="bottom-button"
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => setStep(6)}
            className="bottom-button"
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  );
}
