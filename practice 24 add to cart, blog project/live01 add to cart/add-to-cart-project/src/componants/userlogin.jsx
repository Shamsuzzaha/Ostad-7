import React, { useState } from "react";
import { createListApi, login, verify } from "../API/api.jsx";
import { toast } from "react-hot-toast";

const Userlogin = ({ onLogin }) => {
    const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false); // Manage button loading state

    const toastStyle = (type) => ({
        position: "top-center",
        duration: 3000,
        style: {
            background: type === "success" ? "green" : "red",
            color: "white",
        },
    });

    const handleNext = async () => {
        setLoading(true);
        try {
            await login(email);
            setStep(2); // Move to OTP step
            toast.success("OTP sent to your email!", toastStyle("success"));
        } catch (error) {
            toast.error(
                "Failed to send OTP. Please check your email address.",
                toastStyle("error")
            );
            console.error("Error sending OTP:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = await verify(email, otp);
            sessionStorage.setItem("token", token);

            // Call the onLogin callback to update the Navbar state
            if (onLogin) onLogin();

            // Close the modal programmatically
            const modal = document.getElementById("loginModal");
            let bootstrapModal = window.bootstrap.Modal.getInstance(modal);
            if (!bootstrapModal) {
                bootstrapModal = new window.bootstrap.Modal(modal);
            }
            bootstrapModal.hide();

            // Reset state
            setStep(1);
            setEmail("");
            setOtp("");

            toast.success("Login successful!", toastStyle("success"));
        } catch (error) {
            toast.error("Invalid OTP or login failed. Please try again.", toastStyle("error"));
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Button that triggers the login popup */}
            <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
            >
                Login
            </button>

            {/* Login Modal */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">
                                Login
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-3"
                                            onClick={handleNext}
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Next"}
                                        </button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="mb-3">
                                        <label htmlFor="otp" className="form-label">
                                            Enter OTP
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="otp"
                                            maxLength="4"
                                            placeholder="4-digit OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 mt-3"
                                            disabled={loading}
                                        >
                                            {loading ? "Verifying..." : "Submit"}
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlogin;
