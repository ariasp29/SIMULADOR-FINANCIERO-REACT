const InvestmentTable = ({data}) =>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Año</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) =>(
                    <tr key={index}>
                        <td>{row.year}</td>
                        <td>
                            $
                            {row.amount.toLocaleString("es-CO", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>   
    )
}

export default InvestmentTable