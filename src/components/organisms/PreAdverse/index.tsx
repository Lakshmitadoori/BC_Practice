import { Card, makeStyles } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import MuiButton from "../../atoms/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiTypography from "../../atoms/MuiTypography";
import { ThemeProvider } from "@mui/material";
import g from "../../../../public/assests/images/Vector.svg";
import W from "../../../../public/assests/images/Wrong.svg";
import { theme } from "../../../theme";
import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Image from "../../atoms/Image";
import GifTypo from "../../molecules/GifWithTypography";
interface PreProps {
  src?: string;
  buttonColor?: string;
  maintext?: string;
}
const Pread = (props: PreProps) => {
  const { src, buttonColor, maintext } = props;
  const [array, setarray] = useState<string[]>([]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [disable1, setdisable1] = useState(true);
  const [disable2, setdisable2] = useState(true);
  const [disable3, setdisable3] = useState(true);
  const [disable4, setdisable4] = useState(true);
  const [open, setOpen] = useState(false);
  const [ope, setOpe] = useState(false);
  const handleClick1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray: string[];
    if (checked1) {
      newArray = array.filter(
        (item) => item !== "Driving while license suspended"
      );
    } else {
      newArray = [...array, "Driving while license suspended"];
    }
    setarray(newArray);
    setChecked1(!checked1);
    setdisable1(!disable1);
  };
  const handleClick2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray: string[];
    if (checked2) {
      newArray = array.filter((item) => item !== "Assault domestic voilence");
    } else {
      newArray = [...array, "Assault domestic voilence"];
    }
    setarray(newArray);
    setChecked2(!checked2);
    setdisable2(!disable2);
  };
  const handleClick3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray: string[];
    if (checked3) {
      newArray = array.filter(
        (item) =>
          item !==
          "Unable to verifiy Domestic Employement history at Dunder mifflin"
      );
    } else {
      newArray = [
        ...array,
        "Unable to verifiy Domestic Employement history at Dunder mifflin",
      ];
    }
    setarray(newArray);
    setChecked3(!checked3);
    setdisable3(!disable3);
  };
  const handleClose = () => {
    setOpen(false);
    setOpe(true);
  };
  const styleContinue = {
    backgroundColor: checked1 || checked2 || checked3 ? "#224DFF" : "#95AAFF",
    ":disabled": {
      backgroundColor: checked1 || checked2 || checked3 ? "#224DFF" : "#95AAFF",
    },
    textTransform: "none",
  };
  const combinedState = disable1 || disable2 || disable3 || disable4;
  return (
    <Stack direction="column" spacing={2} width="1366px" height="768px">
      <Stack direction="column" sx={{ position: "absolute", left: "23.28%" }}>
        <Stack direction="row" width="300px">
          <MuiButton
            variant="text"
            sx={{ color: "black" }}
            children="Pre-Adverse Action Notice"
            startIcon={<ArrowBackIcon />}
          />
        </Stack>
        <Stack>
          <Card
            sx={{
              width: "1056px",
              position: "absolute",
              height: "649px",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                left: "20px",
                top: "3.08%",
                bottom: "94.14%",
              }}
            >
              <MuiTypography
                variant="caption2"
                children="From:"
                color="#0A0B0D"
              />
              <MuiTypography
                variant="caption2"
                children="kyle@checkr.com"
                color="#696A6E"
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                left: "20px",
                top: "11.71%",
                bottom: "85.52%",
              }}
            >
              <MuiTypography
                variant="caption2"
                children="To:"
                color="#0A0B0D"
              />
              <MuiTypography
                variant="caption2"
                children="john.smith@checkr.com"
                color=""
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                left: "20px",
                top: "20.03%",
                bottom: "77.2%",
              }}
            >
              <MuiTypography
                variant="caption2"
                children="Subject:"
                color="#0A0B0D"
              />
              <MuiTypography
                variant="caption2"
                children="Pre-adverse action notice - checkr-bpo"
                color="#696A6E"
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                left: "20px",
                top: "28.66%",
                bottom: "68.26%",
              }}
            >
              <MuiTypography
                variant="body2"
                children="Dear John Smith"
                color="#696A6E"
              />
            </Stack>
            <Stack
              sx={{
                position: "absolute",
                left: "20px",
                top: "33.28%",
                bottom: "57.47%",
              }}
            >
              <MuiTypography
                children="You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information 
        in such report(s) including the following specific items identified in the report prepared by Checkr, Inc."
                variant="body2"
                color="#696A6E"
              />
            </Stack>
            <Stack
              spacing={2}
              sx={{
                position: "absolute",
                left: "20px",
                top: "46.22%",
                bottom: "51%",
              }}
            >
              <MuiTypography
                variant="caption2"
                children="Select the charges for the pre adverse action"
                color="#2C2C2E"
              />
              <Stack direction="row" spacing={2}>
                <Checkbox
                  checked={checked1}
                  onChange={handleClick1}
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                />
                <MuiTypography
                  children="Driving while license suspended "
                  variant="caption2"
                  color="#696A6E"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <MuiCheckBox /> */}
                <Checkbox
                  checked={checked2}
                  onChange={handleClick2}
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                />
                <MuiTypography
                  children="Assault domestic voilence"
                  variant="caption2"
                  color="#696A6E"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <MuiCheckBox /> */}
                <Checkbox
                  checked={checked3}
                  onChange={handleClick3}
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                />
                <MuiTypography
                  children="Unable to verifiy Domestic Employement history at Dunder mifflin"
                  variant="caption2"
                  color="#696A6E"
                />
              </Stack>
            </Stack>
            <Stack
              spacing={2}
              sx={{
                position: "absolute",
                left: "20px",
                top: "70%",
                bottom: "16.8%",
              }}
            >
              <MuiTypography
                children="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency 
       (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly."
                variant="caption1"
                color="#696A6E"
              />
              <Stack>
                <MuiTypography
                  children="Sincerly,"
                  variant="caption1"
                  color="#696A6E"
                />
                <MuiTypography
                  children="Checkr-bpo"
                  variant="caption1"
                  color="#696A6E"
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                left: "20px",
                top: "90%",
                bottom: "5%",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <MuiTypography
                  children="Auto send post adverse action"
                  variant="body2"
                  color="#696A6E"
                />
                <MuiButton variant="outlined" children="7" />
                <MuiTypography
                  children="Days"
                  variant="body2"
                  color="#696A6E"
                />
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  height: "100px",
                  width: "220px",
                  left: "800px",
                }}
              >
                <MuiButton
                  onClick={() => setOpen(true)}
                  variant="contained"
                  children="Preview Notice"
                  disabled={!combinedState}
                  sx={styleContinue}
                />
                <ThemeProvider theme={theme}>
                  <Dialog
                    sx={{
                      "& .css-rnmm7m-MuiPaper-root-MuiDialog-paper": {
                        height: "686px",
                        width: "696px",
                      },
                    }}
                    fullWidth={true}
                    maxWidth="md"
                    open={open}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                  >
                    <Stack
                      sx={{
                        width: "696px",
                        heigth: "686px",
                        overflowY: "hidden",
                      }}
                    >
                      <Stack direction="row">
                        <DialogTitle id="dialog-title">
                          Pre-Adverse Action Notice
                        </DialogTitle>
                        <Stack
                          sx={{
                            position: "absolute",
                            left: "660px",
                            top: "15px",
                          }}
                        >
                          <Image
                            source={W}
                            alt="back-up"
                            width="14px"
                            height="14px"
                            onClick={() => setOpen(false)}
                          />
                        </Stack>
                      </Stack>
                      <DialogContent>
                        <DialogContentText id="dialog-description">
                          <Stack
                            sx={{
                              position: "absolute",
                              width: "663px",
                              heigth: "543px",
                              left: "20px",
                              top: "72px",
                            }}
                          >
                            <Stack
                              direction="row"
                              sx={{
                                position: "absolute",
                                left: "1px",
                                top: "0px",
                              }}
                            >
                              <MuiTypography
                                variant="caption1"
                                children="From:"
                                color="#0A0B0D"
                              />
                              <MuiTypography
                                variant="caption1"
                                children="kyle@checkr.com"
                                color="#696A6E"
                              />
                            </Stack>
                            <Stack
                              direction="row"
                              sx={{
                                position: "absolute",
                                left: "1px",
                                top: "30px",
                              }}
                            >
                              <MuiTypography
                                variant="caption1"
                                children="To:"
                                color="#0A0B0D"
                              />
                              <MuiTypography
                                variant="caption1"
                                children="john.smith@checkr.com"
                                color=""
                              />
                            </Stack>
                            <Stack
                              direction="row"
                              sx={{
                                position: "absolute",
                                left: "1px",
                                top: "64px",
                                bottom: "77.2%",
                              }}
                            >
                              <MuiTypography
                                variant="caption1"
                                children="Subject:"
                                color="#0A0B0D"
                              />
                              <MuiTypography
                                variant="caption1"
                                children="Pre-adverse action notice - checkr-bpo"
                                color="#696A6E"
                              />
                            </Stack>
                            <Card
                              sx={{
                                backgroundColor: "#FCE5EA",
                                width: "594px",
                                position: "absolute",
                                height: "54px",
                                top: "100px",
                                borderRadius: "4px",
                              }}
                            >
                              <Stack
                                sx={{
                                  width: "594px",
                                  position: "absolute",
                                  height: "71px",
                                  left: "15px",
                                  top: "10px",
                                  borderRadius: "4px",
                                }}
                              >
                                <MuiTypography
                                  color="#994D5B"
                                  variant="caption2"
                                  children="Please carefully review the list of charges (in bold) and your contact information."
                                />
                                <MuiTypography
                                  color="#994D5B"
                                  variant="caption2"
                                  children="Please note that we will send the corresponding post adverse action email automatically after 7 days."
                                />
                              </Stack>
                            </Card>
                            <Stack
                              direction="row"
                              sx={{
                                position: "absolute",
                                left: "5px",
                                top: "170px",
                              }}
                            >
                              <MuiTypography
                                variant="caption2"
                                children="Dear John Smith"
                                color="#696A6E"
                              />
                            </Stack>
                            <Stack
                              sx={{
                                position: "absolute",
                                top: "200px",
                                left: "5px",
                              }}
                            >
                              <MuiTypography
                                children="You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information 
          in such report(s) including the following specific items identified in the report prepared by Checkr, Inc."
                                variant="caption2"
                                color="#696A6E"
                              />
                            </Stack>
                            <Stack
                              sx={{
                                position: "absolute",
                                top: "280px",
                                left: "5px",
                              }}
                            >
                              {array.map((item) => (
                                <MuiTypography
                                  variant="caption2"
                                  children={item}
                                />
                              ))}
                            </Stack>
                            <Stack
                              spacing={4}
                              sx={{
                                position: "absolute",
                                left: "5px",
                                top: "340px",
                              }}
                            >
                              <MuiTypography
                                children="If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency 
        (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly."
                                variant="caption2"
                                color="#696A6E"
                              />
                              <Stack>
                                <MuiTypography
                                  children="Sincerly,"
                                  variant="caption2"
                                  color="#696A6E"
                                />
                                <MuiTypography
                                  children="Checkr-bpo"
                                  variant="caption2"
                                  color="#696A6E"
                                />
                              </Stack>
                              <MuiTypography
                                children="Attachments"
                                color="#0A0B0D"
                                variant="caption2"
                              />
                              <Stack direction="row" spacing={2}>
                                <Image source={g} />
                                <MuiTypography
                                  children="Summary of right under the FCRA"
                                  variant="caption2"
                                  color="#696A6E"
                                />
                              </Stack>
                              <Stack direction="row" spacing={2}>
                                <Image source={g} />
                                <MuiTypography
                                  children="Copy of background report"
                                  variant="caption2"
                                  color="#696A6E"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                        </DialogContentText>
                      </DialogContent>
                      <Stack
                        sx={{
                          position: "absolute",
                          top: "620px",
                          left: "520px",
                        }}
                      >
                        <DialogActions>
                          <MuiButton
                            sx={{
                              backgroundColor: "#224DFF",
                              textTransform: "none",
                            }}
                            variant="contained"
                            children="Submit Notice"
                            onClick={handleClose}
                            autoFocus
                          />
                        </DialogActions>
                      </Stack>
                    </Stack>
                  </Dialog>
                </ThemeProvider>
                <Dialog
                  open={ope}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-descriptio"
                  sx={{
                    "& .css-tfw21p-MuiPaper-root-MuiCard-root": {
                      heigth: "300px",
                      width: "600px",
                    },
                  }}
                >
                  <DialogContentText id="dialog-descriptio">
                    <GifTypo
                      text="Pre-Adverse Action Notice Successfully Sent"
                      style={{
                        color: "#2C2C2E",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "18px",
                        fontWeight: "500",
                        position: "absolute",
                        left: "16.95%",
                        right: "16.81%",
                        top: "315px",
                        bottom: "19.1%",
                      }}
                      variant="h1"
                    />
                  </DialogContentText>
                </Dialog>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Pread;
