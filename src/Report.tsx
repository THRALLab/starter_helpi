import React, { useState, useEffect } from 'react';
import { generateDetailed, generateBasic } from './ChatGPT';
import './Report.css'; // Import CSS for styling

interface ReportItem {
  title: string;
  url: string;
}

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<ReportItem[]>([]);

  useEffect(() => {
    // Fetch report data when the component mounts
    const fetchReportData = async () => {
      const detailedAnswers = ["Answer 1", "Answer 2", "Answer 3"]; // Example detailed answers
      const basicAnswers = ["Answer A", "Answer B", "Answer C"]; // Example basic answers

      // Generate detailed report data
      const detailedReport = await generateDetailed(detailedAnswers);
      // Generate basic report data
      const basicReport = await generateBasic(basicAnswers);

      // Combine detailed and basic reports
      const combinedReport = [...detailedReport, ...basicReport];

      // Set the combined report data in state
      setReportData(combinedReport);
    };

    fetchReportData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="report-container">
      <h1 className="report-title">ChatGPT API Report</h1>
      {reportData.length > 0 ? (
        <ul className="report-list">
          {reportData.map((item, index) => (
            <li key={index} className="report-item">
              <div>{item.title}</div>
              <div><a href={item.url} target="_blank" rel="noopener noreferrer">View Job</a></div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-text">Loading report...</p>
      )}
    </div>
  );
};

export default Report;
