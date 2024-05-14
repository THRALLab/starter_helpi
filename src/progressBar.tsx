import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css'
interface Bar {
    progress: number
}
export function BasicExample({progress}: Bar):JSX.Element {
  return (
    <div>
      <div className='progressBar' >
          <ProgressBar now={progress} variant='custom'/>
      </div>
  </div>
  );
}

