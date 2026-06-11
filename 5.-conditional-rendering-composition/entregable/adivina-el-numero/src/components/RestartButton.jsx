function RestartButton({ onRestart }) {
  return (
    <button onClick={onRestart} className="restart-btn">
      Jugar de nuevo
    </button>
  );
}

export default RestartButton;
