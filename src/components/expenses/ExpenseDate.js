import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props){ // через пропс получаем дату  под ключом date
    const month = props.date.toLocaleString('en-Us', {month: 'long'}); // получаем месяц. Н: Март
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'});// получаем день из двух цифр. Н: 20
    const year = props.date.getFullYear(); // получаем год. Н: 2022

    return(
        
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;