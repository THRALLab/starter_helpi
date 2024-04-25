
import './App.css';


  
function Home(){
return(
<div className="App">
  <header className="App-header">
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2em', marginBottom: '10px' }}>Career Compass</h1>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5em' }}>Empowering Your Professional Journey with short and fun career tests.</h2>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5em',left:1 }}>We offer:</h2>
      <div style={{ textAlign: 'center' }}>
        <ul style={{ fontFamily: 'revert', fontSize: '1.2em', marginBottom: '20px', listStyleType:'revert-layer', paddingInlineStart: '20px', textAlign:'left' }}>
          <li>A short career test to learn what job is right for you.</li>
          <li>A detailed career assessment to explore your career preferences and future.</li>
          <li> A PDF report of your career test results send to your email.</li>
        </ul>
      </div>
    </div>
  </header>
</div>
);
}
export default Home;