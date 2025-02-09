import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("authToken");
        console.log("Retrieved Token from Session Storage:", token);
        if (token) {
            navigate("/performance");
        }
    }, [navigate]);

    const loginWithGoogle = () => {
        
        window.location.href = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/auth/google`;
    };

    return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

    <h1 className="text-4xl font-bold text-gray-800 mb-6">Lighthouse Performance Score</h1>
    <a
      onClick={loginWithGoogle}
      className="w-64 flex items-center justify-center px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md hover:bg-gray-200 transition-all duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-6 mr-2"
      >
        <path
          d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
          fill="#EA4335"
        ></path>
        <path
          d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
          fill="#4285F4"
        ></path>
        <path
          d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
          fill="#FBBC05"
        ></path>
        <path
          d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
          fill="#34A853"
        ></path>
      </svg>
      <span className="text-xl font-medium">Login with Google</span>
    </a>
  </div>; 
};

export default Login;
