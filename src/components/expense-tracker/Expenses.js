import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from '../ui/Card';


function Expenses(props){
    return (
    <Card className='expenses'>
    
    {props.expenses.map((el) => {
       
       return (
     
     <ExpenseItem
     key={Math.random()}
     title={el.title}
     amount={el.amount}
     date={el.date}
     />
        );
    })}
     
    </Card>
    );      
}

export default Expenses;

