import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../ui/Card';


function ExpenseItem(props) {
    
    // const expenseTitle = props.title;
    // const expenseAmount = props.amount;

  return (

<Card className='expense-item'>
<ExpenseDate date={props.date}/>
 <h2 className='expense-item__description'>{props.title}</h2>
 <div className='expense-item__price'>${props.amount}</div>
</Card>
  );
}
export default ExpenseItem;