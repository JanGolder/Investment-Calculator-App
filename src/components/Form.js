import { useState } from "react";

const initialUserInput = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0
}

const Form = ({ onCalculateHandler, onResetDataHandler }) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onCalculateHandler(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput)
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput["duration"]}
            type="number"
            id="duration"
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
