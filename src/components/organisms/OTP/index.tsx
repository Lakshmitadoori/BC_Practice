import { Stack } from "@mui/system";
import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";
import { theme } from "../../../theme";
import Image from "../../atoms/Image";
import MuiTypography from "../../atoms/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiButton from "../../atoms/Button";
import Login from "../../../../public/assests/images/Login screen.svg";
interface OTPProps {
  src?: string;
  buttonColor?: string;
  maintext?: string;
}
const OtpPage = (props: OTPProps) => {
  const { buttonColor, maintext } = props;
  const [mainOtp, setmainOTP] = React.useState("2222");
  const [otp, setOTP] = React.useState("");
  const [resend, setResend] = React.useState<boolean>(true);
  const handleChange = (OTP: any) => {
    setOTP(OTP);
  };

  const sendOtp = () => {
    setOTP("");
    setResend(false);
    const fun = () => {
      setResend(true);
    };
    setTimeout(fun, 3000);

    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOTP(OTP);
    setmainOTP(OTP);
    alert(`your new otp is :${OTP}`);
  };
  const otpCheckr = () => {
    if (mainOtp !== otp) {
      alert("incorrect OTP");
    } else {
      alert("login successful");
    }
  };
  const styleContinue = {
    backgroundColor: otp.length === 4 ? "#224DFF" : "#95AAFF",
    ":disabled": {
      backgroundColor: otp.length === 4 ? "#224DFF" : "#95AAFF",
    },
  };

  return (
      <Stack
        direction="row"
        sx={{
          position: "relative",
          width: "1366px",
          height: "768px",
          backgroundColor: "FAFAFC",
        }}
      >
        <Stack sx={{ position: "absolute", left: "192px", top: "226px" }}>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            position: "absolute",
            width: "480px",
            height: "670px",
            left: "740px",
            top: "48px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <MuiButton
              variant="text"
              children="Go Back"
              startIcon={<ArrowBackIcon />}
              sx={{ color: "black"}}
            />
          </Stack>
          <MuiTypography variant="h5" children={maintext} />
          <MuiTypography children="Otp Sent to your mail" />
          <MuiOtpInput value={otp} onChange={handleChange} />
          <MuiButton
            variant="contained"
            disabled={otp.length !== 4 ? true : false}
            children="continue"
            onClick={otpCheckr}
            sx={styleContinue}
          />
          <Stack direction="row" alignItems="center">
            <MuiTypography variant="body2" children="DIDNT RECEIVE OTP ?" />
            <MuiButton
              variant="text"
              children="Resend Otp"
              onClick={sendOtp}
              disabled={!resend}
              sx={{ color: buttonColor }}
            />
          </Stack>
        </Stack>
      </Stack>
  );
};

export default OtpPage;
