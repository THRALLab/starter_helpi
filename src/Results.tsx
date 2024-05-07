import useChatGPT from "./hooks/useChatGPT";
import "./results.css";
import Markdown from "react-markdown";

export default function Results() {
	const { chat_gptResponse } = useChatGPT();

	// TODO [ ] - implement a loading feature when the user presses the "get results" button on the modal
	// TODO [ ] - implement the 404 logic when the user attempts to access this page without completing the quiz
	// TODO [ ] - consider creating a second function that will also call the ChatGPT API but will return data about how much of a close fit a user is (in percentages) to a specific career/how likely it matches them so that you can use this data and implement it for graphs + get more data to add to the results page

	const testMarkdown = `Based on the detailed responses you provided, here are four career paths that might align well with your interests, values, and preferences, along with why they could be suitable choices. Additionally, alternative paths will be suggested if these options aren't appealing or sufficient.

### Career Suggestions

#### 1. **Software Developer**
   - **Why:** You mentioned a passion for coding and are currently engaged in a personal coding project using the MERN stack, which indicates a strong interest and skill in software development. This field often offers flexible work arrangements, which align with your need for work-life balance and flexible scheduling. Many tech companies also emphasize growth opportunities and are keen on providing mentorship, addressing your need for career growth and guidance.
   - **Alternative Paths:** If traditional software development roles seem too mainstream, consider niche areas like developing software for non-profits or social enterprises focused on social justice or equality, aligning with your causes.

#### 2. **Data Analyst**
   - **Why:** Your interest in technology and analytical aspects could make data analysis a satisfying field. This role can leverage your coding skills and satisfy your inclination towards detailed analysis and problem-solving. Companies that focus on social justice or have corporate social responsibility programs could align with your interests in societal causes.
   - **Alternative Paths:** Beyond typical business data analysis, you might explore roles in data journalism or in organizations that use data to influence policy changes or advocate for social issues.

#### 3. **Cybersecurity Specialist**
   - **Why:** Given your interest in technology, particularly in areas that require constant learning and problem-solving, cybersecurity offers dynamic and challenging career opportunities. This field is crucial for protecting information and advocating for ethical standards, which might satisfy your desire to combat 'injustice' in digital spaces. It also offers good income potential and growth opportunities, which are important to you.
   - **Alternative Paths:** If direct roles in cybersecurity seem too daunting or technical initially, consider starting in risk assessment or compliance roles within IT departments that also focus on security measures.

#### 4. **Tech Startup Founder or Early Team Member**
   - **Why:** You've shown an interest in potentially starting a small business or an entrepreneurial venture. Working in a startup environment can greatly utilize your broad interests in software development, allows for creative freedom, and often addresses your desired work culture and values such as respect, religious accommodations, and decent work-life balance.
   - **Alternative Paths:** Consider roles in innovation hubs, tech incubators, or as a freelance consultant to gain varied experiences and network, which can later help you launch or efficiently contribute to a startup.

### Final Thoughts
Each recommended career path provides opportunities to address both your personal values and professional interests while offering potential for growth, fulfillment, and a positive work environment. If these paths don't seem perfect, the alternatives could provide a better fit or serve as stepping stones to your ideal position.

### Concerns
The job market in tech can be competitive, making job hunting stressful. Focus on honing unique skills and maybe consider advanced certifications in niche areas of interest. Networking, attending industry conferences, and participating in relevant workshops can also improve visibility and connections in the field.

### Miscellaneous Advice
Continue to develop a compelling portfolio, especially projects like your personal MERN stack project, as these can be critical in demonstrating your abilities to potential employers or investors. In all cases, ensure that whatever path you choose allows for alignment with your core values and personal growth ambitions.`;

	const four_careers: string[] = [];
	for (let i = 1; i <= 4; i++) {
		four_careers.push(
			testMarkdown
				.split("####")
				[i].replace("1.", "")
				.replace("2.", "")
				.replace("3.", "")
				.replace("4.", "")
		);
	}

	four_careers[3] = four_careers[3].split("Final Thoughts")[0];

	return (
		<>
			<div className="backdrop">
				<h1>WELCOME TO YOUR RESULTS!</h1>
			</div>
			<div className="report">
				<h1>YOUR TOP 4 CAREER CHOICES:</h1>
				<div className="cardContainer">
					{four_careers.map((career: string) => {
						return (
							<div className="card">
								<Markdown>{career}</Markdown>
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
