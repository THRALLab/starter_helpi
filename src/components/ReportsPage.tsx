import React from "react";

interface Reports {
    Report: string;
}

interface Career {
    title: string;
    description: string;
}

interface reportsBoolean {
    setReport: React.Dispatch<React.SetStateAction<boolean>>;
    setDetailed: React.Dispatch<React.SetStateAction<boolean>>;
    setBasic: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ReportsPage({ Report, setReport, setBasic, setDetailed }: Reports & reportsBoolean): JSX.Element {
    // Parse the JSON string into an object
    const reportObject = JSON.parse(Report);

    // Extract careers and descriptions into arrays
    const careers: Career[] = [];

    // Iterate over the keys (e.g., "Job1", "Job2", etc.)
    Object.keys(reportObject).forEach((key: string) => {
        const job = reportObject[key];
        careers.push({
            title: job.title,
            description: job.description
        });
        setReport(true)
        setDetailed(false)
        setBasic(false)
    });

    return (
        <div>
            <h1>Welcome to the Reports Page!</h1>
            <div>
                {careers.map((career, index) => (
                    <div key={index}>
                        <h2><strong>{career.title}</strong></h2>
                        <p>{career.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
