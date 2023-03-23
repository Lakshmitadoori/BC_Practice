import './App.css'
import GoogleImage from "../public/assests/images/Google.svg"
import OtpPage from './components/organisms/OTP'
export const App =() => {
    return (
        <>
            <OtpPage/>
            <h1>React TypeScript Webpack</h1>
            <img src={GoogleImage} alt='google-pic' width='25px' height='25px'/>
        </>
    )
}