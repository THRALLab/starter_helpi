import React, { useState } from "react";
import { Button } from "react-bootstrap";

const BasicQuestions: React.FC = () => {
    const [occupation, setOccupation] = useState("");
    const [experience, setExperience] = useState("");
    const [teamwork, setTeamwork] = useState("");
    const [communication, setCommunication] = useState("");
    const [problemSolving, setProblemSolving] = useState("");
    const [remote, setRemote] = useState("");
    const [careerSuggestion, setCareerSuggestion] = useState("");

    const handleOccupationChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setOccupation(event.target.value);
    };

    const handleExperienceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setExperience(event.target.value);
    };

    const handleTeamworkChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTeamwork(event.target.value);
    };

    const handleCommunicationChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCommunication(event.target.value);
    };

    const handleProblemSolvingChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setProblemSolving(event.target.value);
    };

    const handleRemoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemote(event.target.value);
    };

    const suggestCareer = () => {
        if (teamwork === "Strongly Agree" && remote === "Disagree") {
            setCareerSuggestion(
                "Based on your responses, a career in Project Management could be a good fit for you."
            );
        } else {
            setCareerSuggestion(
                "Based on your responses, we suggest exploring different career options."
            );
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "52vh"
            }}
        >
            <h1 style={{ textAlign: "center" }}>
                Basic Career Assessment Page
            </h1>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="occupation">Current Occupation:</label>
                <input
                    type="text"
                    id="occupation"
                    value={occupation}
                    onChange={handleOccupationChange}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="experience">Years of Experience:</label>
                <input
                    type="number"
                    id="experience"
                    value={experience}
                    onChange={handleExperienceChange}
                />
            </div>
            <div>
                <label htmlFor="teamwork">Works well in a team:</label>
                <input
                    type="radio"
                    id="teamwork-strongly-disagree"
                    name="teamwork"
                    value="Strongly Disagree"
                    onChange={handleTeamworkChange}
                />
                <label htmlFor="teamwork-strongly-disagree">
                    Strongly Disagree
                </label>
                <input
                    type="radio"
                    id="teamwork-disagree"
                    name="teamwork"
                    value="Disagree"
                    onChange={handleTeamworkChange}
                />
                <label htmlFor="teamwork-disagree">Disagree</label>
                <input
                    type="radio"
                    id="teamwork-neutral"
                    name="teamwork"
                    value="Neutral"
                    onChange={handleTeamworkChange}
                />
                <label htmlFor="teamwork-neutral">Neutral</label>
                <input
                    type="radio"
                    id="teamwork-agree"
                    name="teamwork"
                    value="Agree"
                    onChange={handleTeamworkChange}
                />
                <label htmlFor="teamwork-agree">Agree</label>
                <input
                    type="radio"
                    id="teamwork-strongly-agree"
                    name="teamwork"
                    value="Strongly Agree"
                    onChange={handleTeamworkChange}
                />
                <label htmlFor="teamwork-strongly-agree">Strongly Agree</label>
            </div>
            <div>
                <label htmlFor="communication">
                    Has strong communication skills:
                </label>
                <input
                    type="radio"
                    id="communication-strongly-disagree"
                    name="communication"
                    value="Strongly Disagree"
                    onChange={handleCommunicationChange}
                />
                <label htmlFor="communication-strongly-disagree">
                    Strongly Disagree
                </label>
                <input
                    type="radio"
                    id="communication-disagree"
                    name="communication"
                    value="Disagree"
                    onChange={handleCommunicationChange}
                />
                <label htmlFor="communication-disagree">Disagree</label>
                <input
                    type="radio"
                    id="communication-neutral"
                    name="communication"
                    value="Neutral"
                    onChange={handleCommunicationChange}
                />
                <label htmlFor="communication-neutral">Neutral</label>
                <input
                    type="radio"
                    id="communication-agree"
                    name="communication"
                    value="Agree"
                    onChange={handleCommunicationChange}
                />
                <label htmlFor="communication-agree">Agree</label>
                <input
                    type="radio"
                    id="communication-strongly-agree"
                    name="communication"
                    value="Strongly Agree"
                    onChange={handleCommunicationChange}
                />
                <label htmlFor="communication-strongly-agree">
                    Strongly Agree
                </label>
            </div>
            <div>
                <label htmlFor="problem-solving">Likes problem solving</label>
                <input
                    type="radio"
                    id="problem-solving-strongly-disagree"
                    name="problem-solving"
                    value="Strongly Disagree"
                    onChange={handleProblemSolvingChange}
                />
                <label htmlFor="problem-solving-strongly-disagree">
                    Strongly Disagree
                </label>
                <input
                    type="radio"
                    id="problem-solving-disagree"
                    name="problem-solving"
                    value="Disagree"
                    onChange={handleProblemSolvingChange}
                />
                <label htmlFor="problem-solving-disagree">Disagree</label>
                <input
                    type="radio"
                    id="problem-solving-neutral"
                    name="problem-solving"
                    value="Neutral"
                    onChange={handleProblemSolvingChange}
                />
                <label htmlFor="problem-solving-neutral">Neutral</label>
                <input
                    type="radio"
                    id="problem-solving-agree"
                    name="problem-solving"
                    value="Agree"
                    onChange={handleProblemSolvingChange}
                />
                <label htmlFor="problem-solving-agree">Agree</label>
                <input
                    type="radio"
                    id="problem-solving-strongly-agree"
                    name="problem-solving"
                    value="Strongly Agree"
                    onChange={handleProblemSolvingChange}
                />
                <label htmlFor="problem-solving-strongly-agree">
                    Strongly Agree
                </label>
            </div>
            <div>
                <label htmlFor="remote">Would work remote:</label>
                <input
                    type="radio"
                    id="remote-strongly-disagree"
                    name="remote"
                    value="Strongly Disagree"
                    onChange={handleRemoteChange}
                />
                <label htmlFor="remote-strongly-disagree">
                    Strongly Disagree
                </label>
                <input
                    type="radio"
                    id="remote-disagree"
                    name="remote"
                    value="Disagree"
                    onChange={handleRemoteChange}
                />
                <label htmlFor="remote-disagree">Disagree</label>
                <input
                    type="radio"
                    id="remote-neutral"
                    name="remote"
                    value="Neutral"
                    onChange={handleRemoteChange}
                />
                <label htmlFor="remote-neutral">Neutral</label>
                <input
                    type="radio"
                    id="remote-agree"
                    name="remote"
                    value="Agree"
                    onChange={handleRemoteChange}
                />
                <label htmlFor="remote-agree">Agree</label>
                <input
                    type="radio"
                    id="remote-strongly-agree"
                    name="remote"
                    value="Strongly Agree"
                    onChange={handleRemoteChange}
                />
                <label htmlFor="remote-strongly-agree">Strongly Agree</label>
            </div>
            <div>
                <Button onClick={suggestCareer}>Get Career Suggestion</Button>
            </div>
            {careerSuggestion && (
                <>
                    <h2>Career Suggestion:</h2>
                    <div style={{ marginBottom: "20px" }}>
                        <p>{careerSuggestion}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default BasicQuestions;
