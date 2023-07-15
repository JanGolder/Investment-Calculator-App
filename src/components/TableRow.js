const TableRow = ({rowData})=>{


    console.log(rowData)
    return (
        <tr>
        <td>{rowData.year}</td>
        <td>{rowData.savingsEndOfYear}</td>
        <td>{rowData.yearlyInterest}</td>
        <td>{rowData.yearlyInterest*rowData.year}</td>
        <td>{rowData.yearlyContribution*rowData.year}</td>
      </tr>
    )
}

export default TableRow;