import React, { useState } from 'react';

import CAlApp from './components/calculation-comp/TimeCalculator'
import './App.css';
import PopupModal from './components/introduction-Popup/IntroductionPopup';

function App() {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
    {/* <div>
  
      <button onClick={openModal}>Open Modal</button>
      <PopupModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </PopupModal>

    </div> */}
    <CAlApp/>
  
    </>
  );
}

export default App;
