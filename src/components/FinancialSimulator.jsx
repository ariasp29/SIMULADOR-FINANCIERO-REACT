import InvestmentTable from './InvestmentTable'
import {useState} from 'react'

const FinancialSimulator = () => {

    const [amount, setAmount] = useState("")
    const [rate, setRate] = useState("")
    const [years, setYears] = useState("")
    const [result, setResult] = useState("")
    const [table, setTable] = useState([])

    const calculateInvestment = () => {

        if (!amount || !rate || !years) {
            alert("Por favor completa todos los campos")
            return
        }

        const itnitialAmount = Number(amount.toString().replace(",","."))
        const interestRate = Number(rate.toString().replace(",", "."))/100
        const totalYears = Number(years)

        if(isNaN(itnitialAmount) || isNaN(interestRate) || isNaN(totalYears)) {
            alert("Por favor ingrese valores numericos validos")
            return
        }

        let data = []
        let capital = Number(amount)
        let interest = Number(rate)/100

        for (let i = 1; i <=Number(years); i++){
            capital = capital * (1 + interest)

            data.push({
                year: i,
                amount: capital
            })
        }

        setResult(capital.toFixed(2))
        setTable(data)
    }

  return (
    <div>
        <h2>financial Simulator 📈</h2>

        <input
        type="number"
        placeholder="Monto incial"
        onChange={(e) => setAmount(e.target.value)}
        />
        <input
        type="number"
        placeholder="Tasa de interes (%)"
        onChange={(e) => setRate(e.target.value)}
        />
        <input
        type="number"
        placeholder="Años"
        onChange={(e) => setYears (e.target.value)}
        />

        <button onClick={calculateInvestment}>
            Calcular
        </button>

        {result && (
            <h3>Total: ${Number(result).toLocaleString("es-CO", {
                minimumFractionDigits: 2
            })}
            </h3>
        )}
        {table.length > 0 && <InvestmentTable data={table} />}
        </div>
  )
}

export default FinancialSimulator