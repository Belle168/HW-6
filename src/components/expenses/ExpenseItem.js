import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; 
import Card from '../ui/Card';


function ExpenseItem(props) { // пропс, передает данные от родительского элемента к дочерним элементам
    
    // const expenseTitle = props.title;
    // const expenseAmount = props.amount;

  return ( //возвращает jsx код

<Card className='expense-item'>
<ExpenseDate date={props.date}/> {/*получаем данные через пропс c компонента ExpenseDate*/}
 <h2 className='expense-item__description'>{props.title}</h2>
 <div className='expense-item__price'>${props.amount}</div>
</Card>
  );
}
export default ExpenseItem; //экспортируем, чтобы мы могли использовать эту компрненту в других компонентах