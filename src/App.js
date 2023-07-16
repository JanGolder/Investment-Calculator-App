import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const [yearlyData,setYearlyData] = useState([]);
  
  const calculateHandler = (userInput) => {
    
    const yearlyData = []; 

    let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

      for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);
  };

  const noDataInfo = <p style={{textAlign: 'center', marginTop: '4rem'}}>No data. Please complete the form.</p>

  return (
    <div>
      <Header/>
      <Form onCalculateHandler={calculateHandler}/>
      {yearlyData.length >0 ? <Table yearlyData={yearlyData}/>:noDataInfo}
    </div>
  );
}

export default App;
