import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const [yearlyData,setYearlyData] = useState([]);
  
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    
    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }



    // do something with yearlyData ...

    setYearlyData(yearlyData);
  };
    const resetDataHandler=()=>{
      setYearlyData([]);
    }
  const noDataInfo = <p style={{textAlign: 'center', marginTop: '4rem'}}>No data. Please complete the form.</p>

  return (
    <div>
      <Header/>
      <Form onCalculateHandler={calculateHandler} onResetDataHandler={resetDataHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {yearlyData.length >0 ? <Table yearlyData={yearlyData}/>:noDataInfo}
    </div>
  );
}

export default App;
