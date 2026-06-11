import { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hasWon, setHasWon] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      setFeedback('Por favor, introduce un número válido.');
      return;
    }

    if (guess === targetNumber) {
      setFeedback('¡Correcto! ¡Has adivinado el número!');
      setHasWon(true);
    } else if (guess < targetNumber) {
      setFeedback('El número es mayor.');
    } else {
      setFeedback('El número es menor.');
    }
  };

  const handleRestart = () => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setFeedback('');
    setHasWon(false);
  };

  return (
    <div className="game-container">
      <h2>¡Adivina el número (1-100)!</h2>
      
      {!hasWon && (
        <form onSubmit={handleGuess}>
          <InputNumber value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
          <button type="submit">Adivinar</button>
        </form>
      )}

      <Message text={feedback} />

      {hasWon && <RestartButton onRestart={handleRestart} />}
    </div>
  );
}

export default Game;
