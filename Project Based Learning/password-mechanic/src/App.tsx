import React, { useState } from 'react';
import './App.css';
import Encryptor from './Encryptor';
import Decryptor from './Decryptor';

enum SelectedButton {
  None,
  Encryptor,
  Decryptor,
}

function App() {
  const [selectedButton, setSelectedButton] = useState(SelectedButton.None);
  const [animate, setAnimate] = useState(true);

  const handleButtonClick = (button: SelectedButton) => {
    setAnimate(true);
    setSelectedButton(button);
  };

  const handleTransitionEnd = () => {
    setAnimate(false);
  };

  return (
    <>
      <div className={`buttons ${animate ? 'zoom' : ''}`} onTransitionEnd={handleTransitionEnd}>
        <button onClick={() => handleButtonClick(SelectedButton.Encryptor)}>Encrypt Text</button>
        <button onClick={() => handleButtonClick(SelectedButton.Decryptor)}>Decrypt Text</button>
      </div>
      <div className={`content ${animate ? 'swipe' : ''}`}>
        {selectedButton === SelectedButton.Encryptor && <Encryptor />}
        {selectedButton === SelectedButton.Decryptor && <Decryptor />}
      </div>
    </>
  );
}

export default App;
