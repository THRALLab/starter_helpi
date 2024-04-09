import { useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./pages/Results";

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if(prevKey !== null) {
    keyData = JSON.parse(prevKey);
}

export type Page = "main" | "debug" | "basic" | "detailed" | "results";

function App() {
    const [key, setKey] = useState<string>(keyData);
    const [currentPage, setCurrentPage] = useState<Page>("main");

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload();
    }

    return (
        <div className="App">
            <Header/>
            <div className="page-renderer">
                {
                    {
                        "main": <HomePage
                            setCurrentPage={setCurrentPage}
                        />,
                        "debug": <p>Debug</p>,
                        "basic": <p>Basic</p>,
                        "detailed": <p>Detailed</p>,
                        "results": <Results/>
                    }[currentPage]
                }
            </div>
            <div>
                <button onClick={() => setCurrentPage("main")}>Main page</button>
                <button onClick={() => setCurrentPage("debug")}>Debug page</button>
                <button onClick={() => setCurrentPage("basic")}>Basic</button>
                <button onClick={() => setCurrentPage("detailed")}>Detailed</button>
                <button onClick={() => setCurrentPage("results")}>Results</button>
            </div>
            <Footer
                setKey={setKey}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
