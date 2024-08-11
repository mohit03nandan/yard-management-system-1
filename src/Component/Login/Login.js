import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <video
                            src={require("../images/vedio.mp4")}
                            loop
                            autoPlay
                            muted
                            width="100%"
                        ></video>
                    </div>
                    <div className="col d-flex flex-column justify-content-evenly">
                        {/* this is the upper div */}
                        <div className="mt-5">
                            <div className="fs-1 fw-semibold font-monospace">
                                Welcome To Yard Master!
                            </div>
                            <div className="fs-5 text-body-secondary">
                                Register Your Phone Number To Get Started
                            </div>
                        </div>
                        
                        {/* this is the lower div */}
                        <div className="mt-5">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    +91
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <div className="d-grid mx-auto">
                                    <button className="btn btn-primary" type="button" onClick={() => navigate('/Verification')}>
                                        Send Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
