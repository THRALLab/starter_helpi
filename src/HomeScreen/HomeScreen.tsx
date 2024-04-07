import logo from './logo.svg';


export function HomeScreen () {


    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Michael Lutz
          Jacob Wilber
          Colin Parsons
        </p>
        <p>
          Michael Forte
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}