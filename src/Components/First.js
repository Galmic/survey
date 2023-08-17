import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";
import "../PageCSS/Pages.css";

export default function First() {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);

  const [selectCampus, setSelectCampus] = React.useState("");
  const [selectSex, setSelectSex] = React.useState("");
  const [selectRegion, setSelectRegion] = React.useState("");
  const [inputAge, setInputAge] = React.useState("");

  const [openCampus, setOpenCampus] = React.useState(false);
  const [openSex, setOpenSex] = React.useState(false);
  const [openRegion, setOpenRegion] = React.useState(false);
  const [inputFocused, setInputFocused] = React.useState(false);

  const handleChangeCampus = (event) => {
    setSelectCampus(event.target.value);
    setUserData({ ...userData, campus: event.target.value });
  };
  const handleCloseCampus = () => {
    setOpenCampus(false);
  };
  const handleOpenCampus = () => {
    setOpenCampus(true);
  };

  const handleChangeSex = (event) => {
    setSelectSex(event.target.value);
    setUserData({ ...userData, sex: event.target.value });
  };
  const handleCloseSex = () => {
    setOpenSex(false);
  };
  const handleOpenSex = () => {
    setOpenSex(true);
  };

  const handleChangeRegion = (event) => {
    setSelectRegion(event.target.value);
    setUserData({ ...userData, religion: event.target.value });
  };
  const handleCloseRegion = () => {
    setOpenRegion(false);
  };
  const handleOpenRegion = () => {
    setOpenRegion(true);
  };

  const handleChangeAge = (event) => {
    setInputAge(event.target.value);
    setUserData({ ...userData, age: event.target.value });
  };

  const handleTextFieldFocus = () => {
    setInputFocused(true);
  };

  const handleTextFieldBlur = () => {
    if (inputAge === "") {
      setInputFocused(false);
    }
  };

  return (
    <div className="page-container">
      <div>
        <FormControl className="page-content">
          <InputLabel id="select-campus-label">Select Campus</InputLabel>
          <Select
            id="demo-controlled-open-select"
            open={openCampus}
            onClose={handleCloseCampus}
            onOpen={handleOpenCampus}
            value={userData["campus"] || ""}
            label="selectCampus"
            onChange={handleChangeCampus}
            className="custom-form-control"
          >
            <MenuItem value="">
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem value="Bulan">Bulan Campus</MenuItem>
            <MenuItem value="Castilla">Castilla Campus</MenuItem>
            <MenuItem value="SorsogonCity">Sorsogon City Campus</MenuItem>
            <MenuItem value="Magallanes">Magallanes Campus</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className="page-content">
          <InputLabel
            id="select-age-label"
            className={inputFocused ? "shrink" : ""}
          ></InputLabel>
          <div className="custom-form-control">
            <TextField
              className="page-content"
              id="demo-controlled-open-select"
              type="string"
              value={userData["age"] || ""}
              onChange={handleChangeAge}
              label="Age"
              onFocus={handleTextFieldFocus}
              onBlur={handleTextFieldBlur}
            />
          </div>
        </FormControl>
      </div>
      <div>
        <FormControl className="page-content">
          <InputLabel id="demo-controlled-open-select-label">Sex</InputLabel>
          <Select
            id="demo-controlled-open-select"
            open={openSex}
            onClose={handleCloseSex}
            onOpen={handleOpenSex}
            value={userData["sex"] || ""}
            label="sex"
            onChange={handleChangeSex}
            className="custom-form-control"
          >
            <MenuItem value="">
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className="page-content">
          <InputLabel id="demo-controlled-open-select">Region</InputLabel>
          <Select
            id="demo-controlled-open-select"
            open={openRegion}
            onClose={handleCloseRegion}
            onOpen={handleOpenRegion}
            value={userData["religion"] || ""}
            label="region"
            onChange={handleChangeRegion}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
            className="custom-form-control"
          >
            <MenuItem value="">
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem value="Region-I">Region I - Ilocos Region</MenuItem>
            <MenuItem value="Region-II">Region II - Cagayan Valley</MenuItem>
            <MenuItem value="Region-III">Region III - Central Luzon</MenuItem>
            <MenuItem value="Region-IV-A">Region IV-A - CALABARZON</MenuItem>
            <MenuItem value="MIMAROPA">MIMAROPA Region</MenuItem>
            <MenuItem value="Region-V">Region V - Bicol Region</MenuItem>
            <MenuItem value="Region-VI">Region VI - Western Visayas</MenuItem>
            <MenuItem value="Region-VII">Region VII - Central Visayas</MenuItem>
            <MenuItem value="Region-VIII">
              Region VIII - Eastern Visayas
            </MenuItem>
            <MenuItem value="Region-IX">
              Region IX - Zamboanga Peninsula
            </MenuItem>
            <MenuItem value="Region-X">Region X - Northern Mindanao</MenuItem>
            <MenuItem value="Region-XI">Region XI - Davao Region</MenuItem>
            <MenuItem value="Region-XII">Region XII - SOCCSKSARGEN</MenuItem>
            <MenuItem value="Region-XIII">Region XIII - Caraga</MenuItem>
            <MenuItem value="NCR">NCR - National Capital Region</MenuItem>
            <MenuItem value="CAR">
              CAR - Cordillera Administrative Region
            </MenuItem>
            <MenuItem value="BARMM">
              BARMM - Bangsamoro Autonomous Region in Muslim Mindanao
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="page-content">
        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={() => setStep(3)}
            className="bottom-button"
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  );
}
