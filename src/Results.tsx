import useChatGPT from "./hooks/useChatGPT";
import "./results.css";
import Markdown from "react-markdown";

export default function Results() {
	const { chat_gptResponse } = useChatGPT();

	// TODO [ ] - implement a loading feature when the user presses the "get results" button on the modal
	// TODO [ ] - implement the 404 logic when the user attempts to access this page without completing the quiz
	// TODO [ ] - consider creating a second function that will also call the ChatGPT API but will return data about how much of a close fit a user is (in percentages) to a specific career/how likely it matches them so that you can use this data and implement it for graphs + get more data to add to the results page

	const markdown = `
Based on the answers provided, here are four career recommendations that might be suitable, along with detailed explanations for why they could be good fits:

1. **Health Informatics Specialist**:
   - **Integration of Interests**:
     - Your interest in health and wellness promotion can be seamlessly integrated into this role, which involves managing health information systems to improve patient care and public health outcomes.
   - **Utilization of Skills**:
     - This career requires strong problem-solving and analytical skills, addressing your need to utilize these capabilities more fully.
   - **Career Development**:
     - There are abundant opportunities for training and certification within health informatics, aligning with your desire for personal growth and development in new skills.
   - **Aligns with Values**:
     - Most roles in health informatics offer good work-life balance and flexibility, resonating with your stated values.

2. **Data Analyst for Wellness and Health Services**:
   - **Mission-driven Work**:
     - You can work directly with data related to health and wellness promotion, fulfilling your desire to participate in missions that resonate with you.
   - **Skills and Growth**:
     - As a data analyst, your high level of analytical and problem-solving skills will be crucial, providing ample opportunity for skill utilization and career growth.
   - **Work Benefits**:
     - Roles in this field often come with flexible work hours and the potential for remote work, which aligns with your preferences for job perks.

3. **Software Developer in HealthTech Companies**:
   - **Sector and Interest Alignment**:
     - Working in a software role within HealthTech companies allows you to blend your coding skills with your interest in health and wellness.
   - **Project Engagement**:
     - Similar to your MERN coding project, HealthTech development projects can be engaging and align with your appreciation for coding and project work.
   - **Recognition and Contribution**:
     - There is significant potential for recognition in innovative tech environments, especially when contributing to impactful health technologies.

4. **User Experience (UX) Designer for Fitness and Health Apps**:
   - **Creative and Analytical Use**:
     - This role leverages your problem-solving skills in a creative context, focusing on user-centered design in the health and wellness sector.
   - **Supporting Causes**:
     - Directly impact user engagement and promote health and fitness through effective app design, aligning with your mission-driven career goals.
   - **Career Satisfaction**:
     - UX roles often provide significant appreciation and recognition for contributions to product development and user satisfaction.

**Alternative Paths**:
- **Further Education or Specialization**: Considering further education in fields like Public Health, Healthcare Data Analytics, or Health Informatics can open new opportunities and could dynamically shift your career trajectory.
- **Health and Wellness Coaching**: If direct engagement with individuals sounds appealing, becoming a certified wellness coach might be fulfilling.
- **Non-profit or Community-based Roles**: Engaging directly in community work, especially related to food security or health services, could connect your coding skills and interest in social causes such as world hunger.
  
**Consideration for Sensibilities**:
- While exploring these options, maintain a strong focus on jobs that emphasize a good work-life balance and offer stable growth potential, as these are crucial to your long-term career satisfaction and personal well-being.`;

	const careerRegex =
		/\d+\.\s+\*\*(.*?)\*\*:[\s\S]*?(?=\d+\.|\*\*Alternative Paths\*\*|$)/g;
	const careerMatches = [];
	let match;

	while ((match = careerRegex.exec(markdown)) !== null) {
		careerMatches.push(
			match[0]
				.replace("1.", "")
				.replace("2.", "")
				.replace("3.", "")
				.replace("4.", "")
		);
	}

	const alternativePaths_regex =
		/\*\*Alternative Paths\*\*:(.*?)(?=\*\*Consideration for Sensibilities\*\*|$)/s;
	const alternativePathsMatch = markdown.match(alternativePaths_regex);

	// Split the matched content into individual paths
	let alternativePathsArray: string[] = [];
	if (alternativePathsMatch) {
		alternativePathsArray = alternativePathsMatch[1]
			.trim()
			.split("\n")
			.map(path => path.trim());
	}

	console.log(alternativePathsArray);

	return (
		<>
			<div className="backdrop">
				<h1>WELCOME TO YOUR RESULTS!</h1>
			</div>
			<div className="report">
				<h1>YOUR TOP 4 CAREER CHOICES:</h1>
				<div className="cardContainer">
					{careerMatches.map((career, index: number) => {
						return (
							<div className="careersCard" key={index}>
								<Markdown>{career}</Markdown>
							</div>
						);
					})}
				</div>
				<h2>
					YOUR TOP {alternativePathsArray && alternativePathsArray.length}{" "}
					ALTERNATIVE CHOICES:
				</h2>
				<div className="cardContainer">
					{alternativePathsArray &&
						alternativePathsArray.map((alternativeCareer, index: number) => {
							return (
								<div className="alternativesCard" key={index}>
									<Markdown>{alternativeCareer}</Markdown>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}
