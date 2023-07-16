import { useState } from "react";

const Form = ({onCalculateHandler,onResetDataHandler}) => {

const [currentSavings,setCurrentSavings] = useState('');
const [yearlySavings, setYearlySavings] = useState('');
const [expectedInterest,setExpectedInterest] = useState('');
const [duration, setDuration] = useState('');

const currentSavingsHandler = (e)=>{
    setCurrentSavings(e.target.value);
}
const yearlySavingsHandler = (e)=>{
    setYearlySavings(e.target.value);
}
const expectedInterestHandler = (e)=>{
    setExpectedInterest(e.target.value);
}
const durationHandler = (e)=>{
    setDuration(e.target.value);
}

const submitHandler = (e)=>{
    e.preventDefault();
    const userInput={currentSavings, yearlySavings,expectedInterest,duration};
    onCalculateHandler(userInput);
}

const resetHandler = ()=>{
  setCurrentSavings('');
  setYearlySavings('');
  setExpectedInterest('');
  setDuration('');
  onResetDataHandler()
}

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={currentSavingsHandler}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={expectedInterestHandler}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationHandler}/>
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
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
