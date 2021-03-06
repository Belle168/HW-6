import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props =>{
if(props.exp.length === 0){
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
 }
 return (
    <ul className='expenses-list'>
        {props.exp.map((el) =>{
            return (
     <ExpenseItem
     key={el.id}
     title={el.title}
     amount={el.amount}
     date={el.date}
     />
      )
    })}
    </ul>
 )
};

export default ExpensesList;