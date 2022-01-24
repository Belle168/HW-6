import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'


const NewExpenses = (props) => {

const SaveExpenseDataHandler = (enteredExpenseData) =>{ // функция получает данные с дочернего элемента через подъем состояния (ExpensesForm => NewExpenses)

  const expenseData = { // создали объект и туда кладем данные полученные с ExpensesForm
    ...enteredExpenseData, // данные полученные с ExpensesForm
    id: Math.random().toString(), // создали ключ(id),чтобы они были уникальными 
  };
  // console.log(expenseData)
  props.newData(expenseData) // подъем состояния в App.js
};

return (
    <div className='new-expense'>
  <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
)
};

export default NewExpenses;