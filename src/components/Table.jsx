import React from 'react'

const Table = ({ headers = [], rows = [], height }) => {
  if (!headers.length || !rows.length) {
    return <div>No data available.</div>;
  }

    return (
        <table className="table caption-top mt-3 w-100" style={{height: `${height}`}}>
            <thead>
                <tr className='table-tr'>
                    
                    {headers.map((header, index) => (
                        <th key={index} scope="col">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='tbody'>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table
