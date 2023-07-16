const TableRow = ({rowData})=>{


    console.log(rowData)
    return (
        <tr>
        <td>{rowData.year}</td>
        <td>{rowData.savingsEndOfYear.toFixed(2)}</td>
        <td>{rowData.yearlyInterest.toFixed(2)}</td>
        <td>{(rowData.yearlyInterest*rowData.year).toFixed(2)}</td>
        <td>{rowData.yearlyContribution*rowData.year}</td>
      </tr>
    )
}

export default TableRow;