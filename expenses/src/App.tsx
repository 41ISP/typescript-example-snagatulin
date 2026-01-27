import { useState } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'
import { Form, type TCategory } from './components/Form'


interface IExpense {
  id: number, 
  name: string, 
  category: TCategory,
  amount: number,
}
const initialExpenses: IExpense[] = [
  {
    id: Date.now(),
    name: "KFC", 
    category: "food", 
    amount: 15, 
  }, 
  {
    id: Date.now() + 1,
    name: "Вейпик",
    category: "fun", 
    amount: 100,
  }
]

function App() {
  const[expenses, setExpenses] = useState<IExpense[]>(initialExpenses)

  
  return (
<div className="app">
    <h1>Expense Tracker</h1>
    {/* Input Form */}
     <Form/>
    <div className="total">Total: $42.50</div>
    {/* Expense List */}
    {expenses.map((el) => <ExpenseCard/>)}
    </div>
  )
}

export default App
