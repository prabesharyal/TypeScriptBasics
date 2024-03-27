import { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState(1000); // Initial principal amount
  const [interestRate, setInterestRate] = useState(0.01); // Annual interest rate (as a decimal)
  const [days, setDays] = useState(365); // Number of days (assuming a year)
  const [compoundingFrequency, setCompoundingFrequency] = useState(1); // Daily compounding (1)

  const calculateCompoundAmount = () => {
    const dailyInterestRate = interestRate / compoundingFrequency;
    const totalDays = days; // Assuming no early withdrawal for simplicity
    const compoundAmount = principal * Math.pow(1 + dailyInterestRate, totalDays);

    return compoundAmount.toFixed(2); // Format to two decimal places
  };

  return (
    <>
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <div>
        <label htmlFor="principal">Principal Amount:</label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate (annual):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate * 100} // Convert to percentage for display
          onChange={(e) => setInterestRate(parseFloat(e.target.value) / 100)}
        />
        <span>%</span>
      </div>
      <div>
        <label htmlFor="days">Number of Days:</label>
        <input
          type="number"
          id="days"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={calculateCompoundAmount}>Calculate</button>
      </div>
      {principal > 0 && interestRate > 0 && days > 0 && (
        <div>
          <p>Compound Amount: ${calculateCompoundAmount()}</p>
        </div>
      )}
      </div>
    </>
  );
}

export default App;
