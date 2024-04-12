import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

export let bodyClassName = 'body';

export const DarkModeToggle = () => {
  //DarkMode States
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  let oldClassName = '';
  //Dark Mode Control
  function updateDarkMode(event: React.ChangeEvent<HTMLInputElement>) {
    setIsDarkMode(event.target.checked)
    if (isDarkMode) {
      oldClassName = 'body-dark';
      bodyClassName = 'body';
    } else {
      oldClassName = 'body';
      bodyClassName = 'body-dark';
    }
    let bigBody = document.getElementById('bigBody');
    if(bigBody != null) {
      bigBody.classList.remove(oldClassName);
      bigBody.classList.add(bodyClassName);
    }
  }
    
  return (
    <div>
      <p>
        <Form.Check
        type="switch"
        id="is-dark-mode-check"
        label="Dark Mode"
        checked={isDarkMode}
        onChange={updateDarkMode}
      />
      </p>
    </div>
  )
}