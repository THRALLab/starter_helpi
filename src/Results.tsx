import useChatGPT from "./hooks/useChatGPT";
import "./results.css";
import Markdown from "react-markdown";

export default function Results() {
	const { chat_gptResponse } = useChatGPT();

	// TODO [ ] - implement a loading feature when the user presses the "get results" button on the modal
	// TODO [ ] - implement the 404 logic when the user attempts to access this page without completing the quiz
	// TODO [ ] - consider creating a second function that will also call the ChatGPT API but will return data about how much of a close fit a user is (in percentages) to a specific career/how likely it matches them so that you can use this data and implement it for graphs + get more data to add to the results page

	/*
	
	1. Software Developer: 40%
	2. Data Analyst: 30%
	3. Health and Wellness Coordinator: 20%
	4. Corporate Trainer: 10%
	
	*/

	const markdown = `Based on the thoughtful responses you provided across various dimensions of career interest and preference, I have identified four potential careers that might closely align with your interests and values. Each suggestion is accompanied by detailed explanations considering your answers across different parameters.

	### Career Recommendations and Explanations
	
	1. **Software Developer** (specifically focusing on Health and Wellness Applications)
	   - **Interest Alignment**: Your interest peaks with coding activities, as evident from your engagement in your MERN coding blog project.
	   - **Skill Utilization**: Leverages your problem-solving and analytical capabilities that you feel are underutilized in your current role.
	   - **Cause Alignment**: Opportunities in health tech can allow you to contribute directly to health and wellness promotion, a cause you're passionate about.
	   - **Growth and Recognition**: Offers good growth potential and fosters an environment where contributions in software can be recognized and appreciated.
	
	2. **Healthcare Data Analyst**
	   - **Skill and Interest Utilization**: Merges your interest in data analysis with the health and wellness sector.
	   - **Cause Alignment**: Data-driven insights generated can significantly impact health outcomes and wellness promotion.
	   - **Work-Life Balance and Flexibility**: Typically offers flexible working conditions which align with your value of a good work-life balance.
	   - **Engagement**: Directly involves engaging tasks requiring analytical proficiency, promoting continuous learning and utilization of your skills.
	
	3. **Health Informatics Specialist**
	   - **Sector Relevance**: Situates directly at the intersection of healthcare and IT, areas you are interested in.
	   - **Job Climate and Opportunities**: The growing emphasis on digital health records and data use in healthcare provides robust career opportunities.
	   - **Professional Development**: Often requires further education or certification, aligning with your Plan B.
	   - **Contribution Recognition**: Roles are crucial in improving healthcare efficiency and effectiveness, offering recognition for contributions.
	
	4. **Program Manager in a Health-Oriented NGO**
	   - **Mission and Values Alignment**: This role allows you to work directly in health promotion, aligning with missions you care about.
	   - **Recognition and Development**: Non-profits often operate with a tight-knit team, offering significant recognition for individual contributions and numerous opportunities for skill development.
	   - **Balance and Engagement**: These roles often encourage community engagement, perfect for those valuing work-life balance and personal fulfillment.
	
	### Alternative Paths
	
	Should these career suggestions not resonate fully with you, here are a few alternative paths to explore:
	
	- **Remote Software Developer**: Prioritizing flexible work hours and remote work options, catering to your work-life balance importance.
	- **Technical Writer for Health and Wellness Publications**: Merges your coding and technology interest with writing, suitable if you are looking into less demanding but skill-utilizing roles.
	- **Biostatistician or Epidemiologist**: Focuses more intensively on data, which could be a good fit if deeper analytical roles appeal to you. 
	- **Certification and Training Roles**: Looking into becoming a trainer or educator in tech, especially focusing on emerging health technologies, could align well with your interest in continuous learning and skill development.
	
	Each of these careers and alternative paths offers unique opportunities to utilize your skills, meet your personal and professional values, and contribute to causes important to you. Always ensure to explore each potential area thoroughly to find the best personal fit.`;

	interface Career {
		career: string;
		description: string;
	}

	const careerRegex =
		/\d+\.\s+\*\*(.*?)\*\*([\s\S]*?)(?=\d+\.|\*\*Alternative Paths\*\*|$)/g;

	const careerMatches: Career[] = [];
	let match;

	while ((match = careerRegex.exec(markdown)) !== null) {
		careerMatches.push({
			career: match[1].trim(),
			description: match[2].trim()
		});
	}

	return (
		<>
			<div className="backdrop">
				<h1>WELCOME TO YOUR RESULTS!</h1>
			</div>
			<div className="report">
				<h1>YOUR TOP 4 CAREER CHOICES:</h1>
				<div className="cardContainer">
					{careerMatches.map((c, index: number) => {
						return (
							<div className="careersCard" key={index}>
								<h2>
									<Markdown>{c.career}</Markdown>
								</h2>
								<Markdown>{c.description}</Markdown>
							</div>
						);
					})}
				</div>
				{/* <h2>
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
				</div> */}
			</div>
		</>
	);
}
