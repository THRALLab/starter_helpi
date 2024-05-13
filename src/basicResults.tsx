import React, { useState, useEffect } from 'react';
import { generateBasicGPT } from './basicGPT.mjs';

const BasicResults: React.FC = () => {
    const [reportData, setData] = useState<string[]>([]);
    const [len, setLen] = useState<number>(0);
    useEffect(() => {
        const fetchReportData = async () => {
            const basicReport = await generateBasicGPT();
            const basicReportValue = Object.values(basicReport)
            setData(basicReportValue);
            setLen(basicReportValue.length); 
        }
        fetchReportData();
    }, []); // Empty dependency array to ensure useEffect runs only once
    
    return (
        <div className="basicResults-container">
           <h1 className = "basicResults-title">Career Report for Basic Career Quiz</h1>
            { len > 0 ? (
                <ul className="basicResults-list">
                    <li className="basicResults-Job1">
                        <div>{reportData[1]}</div>
                        <div>{reportData[2]}</div>
                    </li>
                    <li className="basicResults-Job2">
                        <div>{reportData[3]}</div>
                        <div>{reportData[4]}</div>
                    </li>
                    <li className="basicResults-Job3">
                        <div>{reportData[5]}</div>
                        <div>{reportData[6]}</div>
                    </li>    
                </ul>
            ) : (
                <p className="loading-test">Loading Report...</p>
            )}
        </div>
    )
}
export default BasicResults