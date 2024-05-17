import {render, screen} from '@testing-library/react';
import App from '../../App';
import ResultsPage from '../HTML/ResultsPage';

test('Renders Help on no Career', () => {
    render(<ResultsPage />);
    const careerError = screen.getByText(/No Career Found!/);
    const careerHelp = screen.getByText(/Please go to one of JobNav's career quizzes to generate your ideal career paths./);
    

    expect(careerError).toBeInTheDocument();
    expect(careerHelp).toBeInTheDocument();
});

test('Renders Review Elements', () => { 
    render(<ResultsPage />);
    
    //text
    const ratingtext1 = screen.getByText(/Consider Giving Us A Rating Below?/);
    const ratingtext2 = screen.getByText(/Are you satisfied with the job recommendations that you received?/);

    expect(ratingtext1).toBeInTheDocument();
    expect(ratingtext2).toBeInTheDocument();

    //submit button    
    const submitButton  = screen.getByRole("button", {name: /Submit/});
    expect(submitButton).toBeInTheDocument();
    
    //radio buttons
    const radios = screen.getAllByRole("radio");
    const radio1 = screen.getByRole("radio", {name: /Absolutely!/});
    const radio2 = screen.getByRole("radio", {name: /They were alright/});
    const radio3 = screen.getByRole("radio", {name: /I'm not so impressed/});
    expect(radios).toHaveLength(3);
    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
    expect(radio3).toBeInTheDocument();

});

export {}