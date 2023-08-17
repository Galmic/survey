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
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import "../PageCSS/Pages.css";

export default function Second({ handleCloseModal }) {
  const { setStep, userData, setUserData } = React.useContext(multiStepContext);

  const [selectAgency, setSelectAgency] = React.useState("");

  const [openAgency, setOpenAgency] = React.useState(false);

  const [inputOthers, setInputOthers] = React.useState("");

  const [inputFocused, setInputFocused] = React.useState(false);

  const handleChangeAgency = (event) => {
    setSelectAgency(event.target.value);
    setUserData({ ...userData, agency: event.target.value });
  };

  const handleChangeOthers = (event) => {
    setInputOthers(event.target.value);
    setUserData({ ...userData, age: event.target.value });
  };

  const handleCloseAgency = () => {
    setOpenAgency(false);
  };
  const handleOpenAgency = () => {
    setOpenAgency(true);
  };

  const handleTextFieldFocus = () => {
    setInputFocused(true);
  };

  const handleTextFieldBlur = () => {
    if (inputOthers === "") {
      setInputFocused(false);
    }
  };

  return (
    <div className="page-container">
      <div>
        <FormControl className="page-content">
          <InputLabel id="select-campus-label">Agency Visited</InputLabel>
          <Select
            labelId="select-agency-label"
            id="demo-controlled-open-select"
            open={openAgency}
            onClose={handleCloseAgency}
            onOpen={handleOpenAgency}
            value={userData["agency"] || ""}
            label="selectAgency"
            onChange={handleChangeAgency}
            className="custom-form-control"
          >
            <MenuItem value="">
              <em>Cancel Selection</em>
            </MenuItem>
            <MenuItem value="Accounting">Accounting</MenuItem>
            <MenuItem value="Admission-Services">Admission Services</MenuItem>
            <MenuItem value="Budget">Budget</MenuItem>
            <MenuItem value="Career-and-Job-Placement">
              Career and Job Placement
            </MenuItem>
            <MenuItem value="Cashier">Cashier's Office</MenuItem>
            <MenuItem value="Guidance">Guidance & Counselling</MenuItem>
            <MenuItem value="Health-Services">Health Services</MenuItem>
            <MenuItem value="HRMO">HRMO</MenuItem>
            <MenuItem value="ICT">ICT</MenuItem>
            <MenuItem value="Library">Library</MenuItem>
            <MenuItem value="NSTP">NSTP</MenuItem>
            <MenuItem value="OSDS">OSDS</MenuItem>
            <MenuItem value="Pili-Fab-Lab">Pili Fab Lab</MenuItem>
            <MenuItem value="Registrars-Office">Registrar's Office</MenuItem>
            <MenuItem value="Records-Office">Records Office</MenuItem>
            <MenuItem value="RET">RET</MenuItem>
            <MenuItem value="SFAU">
              Scholarship & Financial Assistance Unit
            </MenuItem>
            <MenuItem value="Sports-Culture">Sports & Culture</MenuItem>
            <MenuItem value="Supply-Property-Office">
              Supply & Property Office
            </MenuItem>
            <MenuItem value="agency-others">Others</MenuItem>
          </Select>
          <FormLabel sx={{ marginBottom: "20px" }}>Service Availed</FormLabel>
        </FormControl>
        {/* OFFICE VISITED - ACCOUNTING */}
        {userData.agency === "Accounting" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="acct-visited"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="acct-visited"
                  control={<Radio />}
                  label="Processing of Claims"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - ADMISSION SERVICES */}
        {userData.agency === "Admission-Services" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="application-admission-selected"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="application-admission-seleted"
                  control={<Radio />}
                  label="Application for Admission"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - BUDGET */}
        {userData.agency === "Budget" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="request-fund-selected"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="request-fund-selected"
                  control={<Radio />}
                  label="Processing of Request for Funding"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - CAREER AND JOB PLACEMENT */}
        {userData.agency === "Career-and-Job-Placement" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="apply-selected"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="apply-selected"
                  control={<Radio />}
                  label="Apply for a Job"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - CASHIER'S OFFICE */}
        {userData.agency === "Cashier" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="collection-selected"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="collection-selected"
                  control={<Radio />}
                  label="Collection"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="check-disburesemnet-selected"
                  control={<Radio />}
                  label="Check Disbursement"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - GUIDANCE AND COUNCELING */}
        {userData.agency === "Guidance" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="referral-services"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="referral-services"
                  control={<Radio />}
                  label="Referral Services"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="follow-up-services"
                  control={<Radio />}
                  label="Follow up Services"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="psychological-testing"
                  control={<Radio />}
                  label="Psychological Testing"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="individual-snventory-service"
                  control={<Radio />}
                  label="Individual Inventory Service"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="issuance-CGMC"
                  control={<Radio />}
                  label="Issuance of CGMC"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - HEALTH SERVICES */}
        {userData.agency === "Health-Services" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="health-screening"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="health-screening"
                  control={<Radio />}
                  label="Health Screening"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - HRMO */}
        {userData.agency === "HRMO" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Recruitment"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Recruitment"
                  control={<Radio />}
                  label="Recruitment/ Selection/ Placement"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="application-for-leave"
                  control={<Radio />}
                  label="Application for Leave"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="securing-service-record"
                  control={<Radio />}
                  label="Securing Service Record/ COE & other Personnel Records"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - ICT */}
        {userData.agency === "ICT" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="id-application-freshmen"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="id-application-freshmen"
                  control={<Radio />}
                  label="ID Card application for freshmen"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="id-application-lost-renew"
                  control={<Radio />}
                  label="Application for new ID/ Lost/ renewal cards"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - Library */}
        {userData.agency === "Library" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="visiting-researches"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="visiting-researches"
                  control={<Radio />}
                  label="Visiting Researchers"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="online-reference-assistance"
                  control={<Radio />}
                  label="Online Reference Assistance"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="library-card"
                  control={<Radio />}
                  label="Application for Library Card"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="signing-clearance"
                  control={<Radio />}
                  label="Signing of Clearance"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - NSTP */}
        {userData.agency === "NSTP" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="certificate-complettion"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="certificate-complettion"
                  control={<Radio />}
                  label="Issuance of Certificate of Completion"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - OSDS */}
        {userData.agency === "OSDS" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="osds"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="osds"
                  control={<Radio />}
                  label="OSDS"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - PILI FAB LAB */}
        {userData.agency === "Pili-Fab-Lab" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="fabrication-prototyping"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="fabrication-prototyping"
                  control={<Radio />}
                  label="Request for fabrication/ prototyping"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - REGISTRARS OFFICE */}
        {userData.agency === "Registrars-Office" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="academic-forms"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="academic-forms"
                  control={<Radio />}
                  label="Processing and submission of request for academic forms."
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="enrolment"
                  control={<Radio />}
                  label="Enrolment"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="graduation"
                  control={<Radio />}
                  label="Graduation"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="requirements-students"
                  control={<Radio />}
                  label="Processing of requirements for student"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - RECORDS OFFICE */}
        {userData.agency === "Records-Office" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="request-copies-documents"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="request-copies-documents"
                  control={<Radio />}
                  label="Request Copies of documents"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="authentication"
                  control={<Radio />}
                  label="Authentication"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="receiving"
                  control={<Radio />}
                  label="Receiving"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="reqleasing"
                  control={<Radio />}
                  label="Releasing"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="routing"
                  control={<Radio />}
                  label="Routing"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - RET */}
        {userData.agency === "RET" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ret"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="ret"
                  control={<Radio />}
                  label="RET"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - SCHOLARSHIP & FINANCE ASSISTANCE UNIT */}
        {userData.agency === "SFAU" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="assistance-unit"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="assistance-unit"
                  control={<Radio />}
                  label="Assistance Unit"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="application-forms"
                  control={<Radio />}
                  label="Issuance of application forms"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="issuance-clearance"
                  control={<Radio />}
                  label="Issuance of clearance"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="request-refund"
                  control={<Radio />}
                  label="Request for Refund"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="SSTRA"
                  control={<Radio />}
                  label="Safety and security threat and risk assesment"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - SPORTS & CULTURE */}
        {userData.agency === "Sports-Culture" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="recruitment"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="recruitment"
                  control={<Radio />}
                  label="Recruitment of athletes/ performers"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="scheduling"
                  control={<Radio />}
                  label="Scheduling try outs and selection"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="issuance-endorsement"
                  control={<Radio />}
                  label="Issuance of endorsement form for student athletes/ performers"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - SUPPLY PROPERTY OFFICE */}
        {userData.agency === "Supply-Property-Office" && (
          <div className="page-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="recruitment"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="procurement"
                  control={<Radio />}
                  label="Procurement (supplier)"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="monitoring"
                  control={<Radio />}
                  label="Monitoring"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="actual-inventory"
                  control={<Radio />}
                  label="Actual Inventory"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="disposal"
                  control={<Radio />}
                  label="Disposal"
                  className="p2-form-control-border"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="p2-form-control-border"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {/* OFFICE VISITED - OTHERS */}
        {userData.agency === "agency-others" && (
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
                  value={userData["age"]}
                  onChange={handleChangeOthers}
                  label="Please Specify"
                  onFocus={handleTextFieldFocus}
                  onBlur={handleTextFieldBlur}
                />
              </div>
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
              setStep(2);
            }}
            className="bottom-button"
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => setStep(4)}
            className="bottom-button"
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  );
}
