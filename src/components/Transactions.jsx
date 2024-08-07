import { useEffect, useState } from 'react'

function Transactions() {

    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(res => res.json())
        .then(transactions => setTransactions(transactions))
        .catch(e => console.log(e))
    }, [])

  return (
    <div>
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            <tr>
                {transactions.map(transaction => {
                    return (
                        <tr>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    )
                })}
            </tr>
        </table>
    </div>
  )
}

export default Transactions