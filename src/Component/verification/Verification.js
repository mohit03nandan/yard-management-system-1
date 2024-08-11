import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import "./Verification.css"; // Import the custom CSS file

const Verification = () => {
    const navigate = useNavigate();
    const [OTP, setOTP] = useState("");

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="mb-2">
                <iframe src="https://lottie.host/embed/0c97b18c-69ab-467e-aaa8-392705d5cf59/SP8AZnrwxK.json" style={{height:"500px",width:"500px"}}></iframe>
            </div>
            <div className="text-center">
                <div className="fs-3 fw-semibold font-monospace mb-2">Phone Verification</div>
                <div className="fs-5 text-body-secondary mb-4">Enter the OTP received!</div>
                <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    secure
                    inputClassName="otp-input" // Add custom class
                    className="mb-3"
                />
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-primary" type="button" onClick={() => navigate('/Yard/Dashboard')}>Verify Phone Number</button>
                </div>
            </div>
        </div>
    );
};

export default Verification;
