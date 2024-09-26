import React, { useState } from "react";

function Popup() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h1>Modal</h1>
            <p>This is a popup window.</p>
          </div>
        </div>
      )} */}

      <body>
        <div className="modal" id="modal">
          <div className="modal-header"></div>
          <button className="close-button">&times;</button>
        </div>
        <div id="overlay"></div>
      </body>
    </div>
  );
}

export default Popup;
