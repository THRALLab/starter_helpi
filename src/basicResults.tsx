import React, { useState, useEffect } from 'react';
import { generateBasicGPT } from './basicGPT.mjs';

const BasicResults: React.FC = () => {
    const [reportData, setData] = useState<string[][]>([]);
    useEffect(() => {
        const fetchReportData = async () => {
            const basicReport = await generateBasicGPT();
            setData(basicReport);
        }
        fetchReportData();
    }, []);
    
    return (
        <div className="basicResults">
           <h1>Career Report for Basic Career Quiz</h1>
            {reportData.length > 0 ? (
                <ul>
                    {reportData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading Report...</p>
            )}
        </div>
    )
}
export default BasicResults