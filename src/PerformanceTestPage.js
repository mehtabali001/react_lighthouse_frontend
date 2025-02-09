import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PerformanceTest from "./PerformanceTest";

const PerformanceTestPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const name = urlParams.get("name");
        const email = urlParams.get("email");

        if (token) {
            sessionStorage.setItem("authToken", token);
            sessionStorage.setItem("userName", name);
            sessionStorage.setItem("userEmail", email);
            setUser({ name, email });
            navigate("/performance", { replace: true }); 
        } else {
            const savedToken = sessionStorage.getItem("authToken");
            const savedName = sessionStorage.getItem("userName");
            const savedEmail = sessionStorage.getItem("userEmail");
            if (savedToken) {
                setUser({ name: savedName, email: savedEmail });
            } else {
                navigate("/");
            }
        }
    }, [navigate]);

    const handleLogout = async () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div>
            {user ? (
                <>
                <div className="bg-blue-500 text-white p-4 text-2xl">
                    <h1>Welcome, {user.name}!</h1>
                    <p>Your email: {user.email}</p>
                </div>
                    
                    
                    <div>
                    <PerformanceTest />
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PerformanceTestPage;
