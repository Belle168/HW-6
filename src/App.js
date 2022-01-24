import React, { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/new-expenses/NewExpenses';

const INIT_STATE = [ // масссив с объектами который будет отображаться на экране
    {
        id: 'e1', // ключ (должен быть уникальным), допускается string,number
        title: 'Total Paper', // название расхода
        amount: 1.5,   // количество потраченных денег
        date: new Date(2024, 7, 14), // какого числа совершили покупку
    },
    {
        id: 'e2',
        title: 'Car Insurance',
        amount: 200,
        date: new Date(2022, 2, 28),
 },
 {
    id: 'e3',
    title: 'Gift',
    amount: 1300,
    date: new Date(2023, 8, 16),
 },
 {
    id: 'e4',
    title: 'Income Tax',
    amount: 790,
    date: new Date(2022, 11, 20),
 },
];

function App() {
    
    const [expenses, setExpenses] = useState(INIT_STATE); // данные которые будут отображаться на экране
  
    const NewExpensesData = (newData) =>{ // получаем данные с дочернего элемента
     
   setExpenses((prevExpense)=>{ // сохраняет предыдущие состояние
        return [...prevExpense,newData]
     });
   };

    return (
        <div className='App'>
        <NewExpenses newData={NewExpensesData}/>  {/*поступают новые данные с ExpensesForm*/}  
<Expenses items = {expenses}/>

    </div>
    );
};
export default App;
