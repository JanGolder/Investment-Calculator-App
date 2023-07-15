import TableRow from './TableRow';

const Table = ({yearlyData})=>{

console.log(yearlyData)

    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {yearlyData.map(row=> <TableRow key={Math.random()} rowData={row}/>)}
        </tbody>
      </table>
    );
}

export default Table;