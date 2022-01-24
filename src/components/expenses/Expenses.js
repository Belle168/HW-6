import React, { useState } from 'react';
import './Expenses.css';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('All'); // значении select поступают сюда в useState

    const filterChangeHandler = (selectedYear) =>{ //значении select поступают сюда через подъем состояния
   setFilteredYear(selectedYear) //  (select) onChange значении мы передали сюда
    };

    const filteredExpenses = props.items.filter(el =>{ //фильтруем items, они у нас хранятся в App.js
        return el.date.getFullYear().toString() === filteredYear;// если даты данны и дата select совпадают то возвращает новый массив
    });
 

return (
    <Card className='expenses'>  {/*card - это обертка*/}

    <ExpensesFilter    //компонента отвечает за рендер select
    selected={filteredYear}  // предаем filteredYear для двусторонней привязки
    onChangeFilter={filterChangeHandler} // передали функцию как пропс которая будет делать подъем состояния
    />  
    
    <ExpensesChart // компонента отвечает за рендер статистику
    allExpenses={props.items} // передали наш массив (App.js)
    expenses={filteredExpenses}  // отфильтрованный массив
    selected={filteredYear} // значение из select
    />
    
    
    <ExpensesList // компонента отвечает за рендер расходов
    expenses={props.items} // массив (App.js)
    expensesFilter={filteredExpenses} // отфильтрованный массив
    selected={filteredYear}  // значение из select
    />

    </Card>
    );      
};

export default Expenses;

