import { useEffect, useState } from 'react'

function Transactions() {

    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(res => res.json())
        .then(data => setTransactions(data))
        .catch(e => console.log(e))
    }, [])

  return (
    <div>Transactions</div>
  )
}

export default Transactions