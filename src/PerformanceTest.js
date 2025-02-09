import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const PerformanceTest = () => {
    const [url, setUrl] = useState("");
    const [platform, setPlatform] = useState("mobile");
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);

    const isValidURL = (str) => {
        const pattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
        return pattern.test(str);
    };

    const fetchPerformance = async () => {
        if (!isValidURL(url)) {
            alert("Please enter a valid URL must start with http:// or https://");
            return;
        }

        setLoading(true);
        setScore(null);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/lighthouse`,
                { url, platform },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setScore(response.data.performance_score);
        } catch (error) {
            console.error("Error fetching performance data:", error);
            alert("Error fetching performance score");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL" 
                className="p-2 border rounded w-80"
            />
            <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="p-2 border rounded w-80"
            >
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
            </select>
            
            <button
                onClick={fetchPerformance}
                disabled={loading}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50"
            >
                {loading ? "Fetching..." : "Check Performance"}
            </button>

            {loading && (
                <div className="flex justify-center mt-4">
                    <motion.div
                        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                </div>
            )}

            {score !== null && !loading && (
                <>
                <motion.div
                    className="mt-6 p-4 w-64 text-center rounded-xl shadow-lg"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        backgroundColor:
                            score >= 90 ? "#4CAF50" : score >= 50 ? "#FFC107" : "#F44336",
                    }}
                >
                    <h2 className="text-2xl font-bold">Performance Score</h2>
                    <p className="text-3xl font-extrabold">{score}</p>
                </motion.div>
            </>
            )}
        </div>
    );
};

export default PerformanceTest;
