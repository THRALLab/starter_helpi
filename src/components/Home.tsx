import React from 'react';
import { Buttons } from './Buttons';
import '/Users/rubinashaik/starter_helpi/src/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/ListItem';
import 'src/App.css'

export function Home(): JSX.Element {
    return (
        <div>
        <Buttons></Buttons>
        
        <header>
          <h1>Welcome to My React Web Page!</h1>
        </header>
        <main>
        <div className="page">
            <div className="container">
                <div className="box">
                 <button>Button 1</button>
            </div>
             <div className="box">
                <button>Button 2</button>
             </div>
           </div>
      </div>
        </main>
        <footer>
          <p>Footer content goes here.</p>
        </footer>
      </div>
    )
}