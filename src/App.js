import './App.css';
import Expenses from './components/expense-tracker/Expenses';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Total Paper',
            amount: 1.5,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'Car Insurance',
            amount: 200,
            date: new Date(2021, 2, 28),
     },
     {
        id: 'e3',
        title: 'Gift',
        amount: 1300,
        date: new Date(2021, 8, 16),
     },
     {
        id: 'e4',
        title: 'Income Tax',
        amount: 790,
        date: new Date(2021, 11, 20),
     },
    ];
    

    return (
        <div className='App'>
            
<Expenses expenses = {expenses}/>
    </div>
    );
}

export default App;
