import ProgressBar from 'react-bootstrap/ProgressBar';
interface Bar {
    progress: number
}
export function BasicExample({progress}: Bar):JSX.Element {
  return (
    <div>
    {/* <h1 style = {{color: "#ffffff", backgroundColor: "#ffffff", width: "80%", justifyContent: 'center', alignItems: 'center', fontSize: 0}}>Progress Barrrrrrrrrrrrrrr</h1> */}
    <ProgressBar now={progress} className='Progress-bar'/> 
  </div>
  );
}

