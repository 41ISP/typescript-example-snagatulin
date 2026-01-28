import { useEffect, useState } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'
import { Form, type IFormData, type TCategory } from './components/Form'


export interface IExpense {
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

export function App() {
  const[expenses, setExpenses] = useState<IExpense[]>(initialExpenses)
  const[total, setTotal] = useState(0)
  const[formData, setFormData] = useState<IFormData>({
    name: "",
    amount: 0, 
    category: ""
  })
  useEffect(() => {
     setTotal(expenses.reduce((acc, el) => acc + el.amount, 0))
  }, [expenses])
  

  return (
<div className="app">
    <h1>Expense Tracker</h1>
    {/* Input Form */}
     <Form formData={formData} setFormData={setFormData}/>
    <div className="total">Total: ${Math.round(total)}</div>
    {/* Expense List */}
    {expenses.map((el) => <ExpenseCard {...el}/>)}
    </div>
  )
}


