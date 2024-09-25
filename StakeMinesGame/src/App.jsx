import { useState } from 'react';
import './App.css';
import MineImage from './images/Mine.png';
import DiamondImage from './images/diamond.jpg';
function App() {
  const [hide, setHide] = useState(true);
  const [value, setValue] = useState('');
  const [sideLogo, setSideLogo] = useState('');
  const [mines, setMines] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState(new Array(25).fill(false)); // Track clicked boxes
  const [gameOver, setGameOver] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false); // Track if game is lost
  const [betAmount, setBetAmount] = useState(0);
  const [totalMoney, setTotalMoney] = useState(1000); // Starting money
  const [profit, setProfit] = useState(0);
  const [message, setMessage] = useState('');
  
  const handleBetChange = (event) => {
    setBetAmount(event.target.value);
  };
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const startGame = () => {
    const numOfMines = parseInt(value);
    const mineIndices = new Set();
    while (mineIndices.size < numOfMines) {
      const randomIndex = Math.floor(Math.random() * 25);
      mineIndices.add(randomIndex);
    }
    setMines(Array.from(mineIndices));
    setHide(false);
    setSideLogo(true);
    setGameOver(false);
    setIsGameLost(false); // Reset game lost state
    setProfit(0);
    setMessage('');
    setClickedBoxes(new Array(25).fill(false)); // Reset clicked boxes
  };

  const handleBoxClick = (index) => {
    if (gameOver || clickedBoxes[index]) return;

    const updatedClickedBoxes = [...clickedBoxes];
    updatedClickedBoxes[index] = true;
    setClickedBoxes(updatedClickedBoxes);

    if (mines.includes(index)) {
      setGameOver(true);
      setIsGameLost(true); // Mark game as lost
      setMessage(`Oops! You hit a mine. You lost ₹${betAmount}`);
      setTotalMoney(totalMoney - betAmount);
    } else {
      setProfit(profit + betAmount * 0.5); // Increase profit with each correct click
      setMessage(`Great! You found a diamond.`);
    }
  };

  const handleWithdraw = () => {
    setTotalMoney(totalMoney + profit);
    setGameOver(true);
    setMessage(`You withdrew ₹${profit}. Your total balance is ₹${totalMoney + profit}.`);
  };

  const handleRestart = () => {
    setHide(true); // Show input section again
    setMessage('');
    setProfit(0);
    setClickedBoxes(new Array(25).fill(false)); // Reset clicked boxes
  };

  return (
    <>
      <div className="body">
        <div className={`stakeLogo ${sideLogo ? "sideStakeLogo" : ""}`}></div>
        <h1 className='text-white text-5xl font-bold mb-6'>STAKE's Mine Games</h1>
        
        <div id='enterNumBox' className={` ${!hide ? "hidden" : ""} flex justify-between items-center w-full h-32 flex-col  `}>
          <h1 className='text-white text-3xl font-bold'>Enter The Number of Mines You Want.</h1>
          <input 
            className='bg-blue-600 h-10 rounded-lg border-white text-white text-center border-2'
            id="numberInput"
            type="number"
            value={value}
            onChange={handleChange}
            placeholder="Enter a number"
          />
          <h1 className='text-white text-3xl font-bold'>Enter Your Bet Amount</h1>
          <input
            className='bg-blue-600 h-10 rounded-lg border-white text-white text-center border-2'
            id="betInput"
            type="number"
            value={betAmount}
            onChange={handleBetChange}
            placeholder="Enter bet amount"
          />
          <button
            className='bg-blue-800 rounded-md h-8 w-14 border-white border-2 text-white'
            onClick={startGame}
          >OK</button>
        </div>

        <div className={`mainBox ${hide ? "hidden" : ""}  flex flex-wrap gap-3 justify-between mb-9`} id='mainBox'>
          {clickedBoxes.map((clicked, index) => (
            <div
              key={index}
              className={`smallBoxes h-24 w-24 bg-blue-800 rounded-xl flex justify-center items-center`}
              onClick={() => handleBoxClick(index)}
            >
              {clicked && (
                mines.includes(index) ? 
                <img src={MineImage} alt="Mine" className="h-full w-full" /> : 
                <img src={DiamondImage} alt="Diamond" className="h-full w-full" />
              )}
            </div>
          ))}
        </div>

        {gameOver && isGameLost && (
          <div className="message-box">
            <h2 className="text-white text-2xl">{message}</h2>
            <button
              className="bg-red-600 text-white mt-4 py-2 px-4 rounded"
              onClick={handleRestart}
            >
              Restart Game
            </button>
          </div>
        )}

        {gameOver && !isGameLost && (
          <div className="message-box">
            <h2 className="text-white text-2xl">{message}</h2>
            <button
              className="bg-green-600 text-white mt-4 py-2 px-4 rounded"
              onClick={handleWithdraw}
            >
              Withdraw Profit
            </button>
          </div>
        )}

        {!gameOver && !hide && (
          <div className="profit-box">
            <h2 className="text-white text-2xl">Total Money: ₹{totalMoney}</h2>
            <h2 className="text-white text-2xl">Profit: ₹{profit}</h2>
            <button
              className="bg-green-600 text-white mt-4 py-2 px-4 rounded"
              onClick={handleWithdraw}
            >
              Withdraw Profit
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
