import useChatGPT from "./hooks/useChatGPT";
import "./results.css";
import Markdown from "react-markdown";

export default function Results() {
	const { chat_gptResponse } = useChatGPT();

	// TODO [ ] - implement a loading feature when the user presses the "get results" button on the modal
	// TODO [ ] - implement the 404 logic when the user attempts to access this page without completing the quiz
	// TODO [ ] - consider creating a second function that will also call the ChatGPT API but will return data about how much of a close fit a user is (in percentages) to a specific career/how likely it matches them so that you can use this data and implement it for graphs + get more data to add to the results page

	const markdownText = `
	**Career Recommendation Report**
	
	**Introduction:**
	Based on your responses to the survey, we have identified four potential career paths that align closely with your interests, values, capabilities, and aspirations. The selected careers reflect your preference for technology, your willingness to face challenges and competition, your passion for coding and problem-solving, and your desire for recognition and a good work-life balance. Below, each recommended career is discussed in detail, explaining why it might be a suitable choice for you.
	
	**Recommended Careers:**
	
	**1. Software Developer (Specific Focus: Health & Wellness Applications)**
	Given your interest in software development and health and wellness promotion, a career in creating applications focused on health and wellness could be highly rewarding. This career would utilize your coding skills, particularly your experience with the MERN stack, and enable you to contribute to areas you care about, such as wellness and preventive healthcare technologies. Your problem-solving and analytical skills would be central to developing innovative solutions that promote better health outcomes. This pathway also offers great potential for recognition within tech and health communities, aligning with your aspiration for appreciation of your contributions.
	
	**2. Data Analyst in Public Health Sector**
	This role involves analyzing data to derive insights that can improve public health policies and practices, which indirectly contributes to tackling broader issues like world hunger by promoting better health standards and resource allocations. Given your analytical skills and interest in making meaningful contributions to societal issues, this career could be fulfilling. The position usually comes with flexible working options and has significant growth potential as data-driven decision-making becomes more integral to public health.
	
	**3. Health Tech Product Manager**
	Transitioning into a product management role within a health tech company could be an excellent fit. It allows you to oversee the development and deployment of technology products that enhance health outcomes. This position would leverage your technical background and interest in health and wellness, offering opportunities for leadership and recognition. Moreover, it aligns with your preference for a good work-life balance and contributes meaningfully to a cause you care about.
	
	**4. Compliance Analyst in Cybersecurity for Healthcare Organizations**
	Given your interest in cybersecurity, a role as a compliance analyst focusing on healthcare organizations could be highly relevant. This career involves ensuring that health data systems comply with laws and regulations, which is crucial for protecting patient information and the integrity of healthcare systems. This role would use your analytical capabilities and also offer stable career prospects with the rise of digital health services.
	
	**Alternative Paths:**
	If the above careers do not fully resonate with you or if you seek different experiences before settling into a long-term career path, consider the following alternatives:
	- **Further Education**: Pursuing a master’s degree or certifications in fields like data science, cybersecurity, or health informatics could expand your knowledge and make you more competitive in the job market.
	- **Freelance Tech Consulting**: Given your coding skills and problem-solving abilities, freelance consulting might provide diverse projects without committing to a single corporate path, also enhancing work-life balance.
	- **Start-up Environment**: Engaging with startups, particularly in the health tech space, can be dynamic and offer rapid growth opportunities, though it might challenge your preference for a structured work-life balance.
	- **Volunteer or Part-time Roles in Non-profits**: Engaging with non-profit organizations that focus on health and wellness or global issues like hunger can be fulfilling and might offer flexible working conditions.
	
	**Conclusion:**
	The recommended careers have been chosen based on your interest in technology, particularly software development and cybersecurity, and your desire to contribute to health and wellness. These paths not only align with your technical skills and values but also offer opportunities for personal satisfaction and professional growth. Alternative paths are suggested to provide flexibility and additional opportunities to find the career that best fits your evolving aspirations and lifestyle needs.
	`;

	const careerRegex = /\*\*(\d+)\. (.+?)\*\*\n([\s\S]*?)(?=\*\*|$)/g;
	let careers = [];
	let match;

	interface Career {
		title: string;
		description: string;
	}

	while ((match = careerRegex.exec(markdownText)) !== null) {
		const career: Career = {
			title: match[2],
			description: match[3].trim()
		};
		careers.push(career);
	}

	return (
		<>
			<div className="backdrop">
				<h1>WELCOME TO YOUR RESULTS!</h1>
			</div>
			<div className="report">
				<h1>YOUR TOP 4 CAREER CHOICES:</h1>
				<div className="cardContainer">
					{careers.map((career: Career, index: number) => {
						return (
							<div className="card" key={index}>
								<h3>
									<Markdown>{career.title}</Markdown>
								</h3>
								<p>
									<Markdown>{career.description}</Markdown>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);

	// return chat_gptResponse !== "" ? (
	// 	<div className="report">
	// 		<Markdown>{testMarkdown}</Markdown>
	// 	</div>
	// ) : (
	// 	<div className="NotFoundContainer">
	// 		<h1>404</h1>
	// 	</div>
	// );
}
