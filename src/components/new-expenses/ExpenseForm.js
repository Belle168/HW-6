import { useState } from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {
    const [title, setTitle] = useState(''); // состояние инпута(title)
    const [amount, setAmount] = useState(''); //состояние инпута (amount)
    const [date, setDate]  = useState(''); // cостояние инпута(date)
    

    // функции обработчики инпутов (title,amount,date),где в каждой обновляется состояние каждого инпута
    const titleChangeHandler = (event) =>{
      setTitle(event.target.value)
    }
     
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
    }

    
    const submitHandler = (event) =>{ //  функция обработчик (submit)
        event.preventDefault()  // по умолчанию отключает перезагрузку при нажатии на submit
        
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        
        props.onSaveExpenseData(expenseData) // подъем состояния
        
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            
            <div className='new-expense__control'>
            <label>Title</label>
            <input 
            name='title' 
            type="text" 
            value={title} 
            onChange={titleChangeHandler}/>
            </div>
            
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                name='amount' 
                type="number" 
                min="0.1" step="1" 
                value={amount} 
                onChange={amountChangeHandler }/>
                </div>
            
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                name='date' 
                type="date" 
                min="2022-01-01" 
                value={date} 
                onChange={dateChangeHandler}/>
            </div>
        
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;