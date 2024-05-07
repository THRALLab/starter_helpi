import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ProgressBar from './bar';

export function DetailedQs(): JSX.Element {
    const [index,setIndex] = useState<number>(0);
    const [detailedAnswers, setDetailedAnswers] = useState<string[]>(["","","","","","","","","","","","","",""]);
    const [clickedAnswers] = useState<number[]>([]);
    function addAnswer(answer: React.ChangeEvent<HTMLInputElement>){
        setDetailedAnswers(prevDetailedAnswers => {
          const newDetailedAnswers = [...prevDetailedAnswers]; // Make a copy of the previous state
          newDetailedAnswers[index] = answer.target.value; // Update the copy with the new answer
          return newDetailedAnswers; // Return the new state
        });
      }
      function updateIndex(qindex: number){
        if (!clickedAnswers.includes(qindex)) {
          setIndex(index + 1);
        }
        clickedAnswers.push(qindex);
        console.log(detailedAnswers);
      }
      const [page, setPage] = useState<string>("");
      const [click, setClick] = useState<boolean>(false);
      const [amount,setAmount] = useState<number>(7);
    function generateQ(){
        setPage("moreDetails");
        setClick(true);
        setAmount(14);
    }
    
    return (
        <><div className="Detail">
        <div className="Progress">{Math.round((index / amount) * 100)} % </div>
        <div className='Space'><ProgressBar value={index} maxValue={amount} /></div>
        <Form>
          <Form.Label className="Bold">Consider the role of failure in career growth. How do you approach setbacks and challenges, and what strategies do you employ to bounce back and persevere?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(0)}></Form.Control>            <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Reflect on the impact you want to have on your community or society through your career. </Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(1)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Reflect on a moment in your life when you felt completely immersed and engaged in what you were doing. What were you doing, and how can you incorporate similar elements into your future career?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(2)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Consider the lifestyle you envision for yourself in the future. How does your ideal work-life balance look, and which career paths align with your desired lifestyle?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(3)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Consider the future of work and emerging industries. Which trends or technologies do you find most exciting, and how could you position yourself to capitalize on these opportunities?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(4)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Reflect on a moment when you felt deeply fulfilled and energized by your work, regardless of whether it was a paid job or a volunteer opportunity. What aspects of that experience can you identify as key drivers for your career satisfaction?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(5)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <Form>
          <Form.Label className="Bold">Reflect on your preferred work style and environment. Are you more drawn to structured routines, flexibility, or a mix of both?</Form.Label>
          <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(6)}></Form.Control>            <br></br>
          <br></br>
        </Form>
        <div>
          {page === 'moreDetails' && (
            <><Form>
              </Form><Form>
              <Form.Label className="Bold">Consider the future of education and skill development. How do you stay ahead of the curve by continuously upskilling and reskilling to adapt to emerging trends in your industry?</Form.Label>
              <Form.Control placeholder="Answer"  onChange={addAnswer} onClick={() => updateIndex(7)}></Form.Control>            <br></br>
            </Form><Form>
                <Form.Label className="Bold">In what ways do you incorporate mindfulness and wellness practices into your daily work routine to foster resilience and prevent burnout ? </Form.Label>
                <Form.Control placeholder="Answer"  onChange={addAnswer} onClick={() => updateIndex(8)}></Form.Control>            <br></br>
                <br></br>
              </Form><Form>
                <Form.Label className="Bold">Reflect on your approach to risk-taking in your career. How do you balance the desire for stability with the willingness to embrace uncertainty and pursue opportunities with potential for growth?</Form.Label>
                <Form.Control placeholder="Answer"  onChange={addAnswer} onClick={() => updateIndex(9)}></Form.Control>            <br></br>
                <br></br>
              </Form><Form>
                <Form.Label className="Bold">What activities or subjects have consistently captured your interest and curiosity throughout your life?</Form.Label>
                <Form.Control placeholder="Answer"  onChange={addAnswer} onClick={() => updateIndex(10)}></Form.Control>            <br></br>
                <br></br>
              </Form><Form>
                <Form.Label className="Bold">Consider the financial aspects of different career paths. What level of income and financial stability are you comfortable with, and how do different career options align with these financial goals?</Form.Label>
                <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(11)}></Form.Control>            <br></br>
                <br></br>
              </Form><Form>
                <Form.Label className="Bold">Consider your role models or inspirational figures. What qualities or achievements do they possess that resonate with you, and how might you incorporate these elements into your career trajectory?</Form.Label>
                <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(12)}></Form.Control>            <br></br>
                <br></br>
              </Form><Form>
                <Form.Label className="Bold">How might your preferred climate and geographic location influence your career decisions? Are you drawn to urban, rural, coastal, or mountainous environments, and how can you align your career goals with locations that match your preferences?</Form.Label>
                <Form.Control placeholder="Answer" onChange={addAnswer} onClick={() => updateIndex(13)}></Form.Control>            <br></br>
                <br></br>
              </Form></>
          )}
        </div>
      </div><Button className="Submit-Button" variant="primary" onClick={generateQ} disabled={click}>Generate more questions</Button></>

    )
}