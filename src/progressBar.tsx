import ProgressBar from 'react-bootstrap/ProgressBar';
interface Bar {
    progress: number
}
export function BasicExample({progress}: Bar):JSX.Element {
  return (
    <div>
    <h1 style = {{color: "#282c34", backgroundColor: "#282c34"}}>Progress Barrrrrrrrrrrrrrr</h1>
    <ProgressBar now={progress}/> 
  </div>
  );
}

