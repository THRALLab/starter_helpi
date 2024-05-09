import React, { useState, useEffect } from 'react';
import { generateDetailed, generateBasic } from './ChatGPT';

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<string[]>([]);

  useEffect(() => {
    // Example of fetching report data (you may adjust this based on your actual implementation)
    const fetchReportData = async () => {
      // Example of fetching detailed report data
      const detailedAnswers = ["Answer 1", "Answer 2", "Answer 3"]; // Replace with actual answers
      const detailedReport = await generateDetailed(detailedAnswers);

      // Example of fetching basic report data
      const basicAnswers = ["Answer A", "Answer B", "Answer C"]; // Replace with actual answers
      const basicReport = await generateBasic(basicAnswers);

      // Combine both detailed and basic reports
      const combinedReport = [...detailedReport, ...basicReport];

      // Set the combined report data in state
      setReportData(combinedReport);
    };

    fetchReportData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h1>ChatGPT API Report</h1>
      {reportData.length > 0 ? (
        <ul>
          {reportData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading report...</p>
      )}
    </div>
  );
};

export default Report;
