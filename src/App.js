import './App.css';
import Expenses from './components/Expenses';

function App() {
    const expenses = [
        {
            id: 'el',
            title: 'Total Paper',
            amount: 1.5,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'el2',
            title: 'Car Insurance',
            amount: 200,
            date: new Date(2021, 2, 28),
     },
     {
        id: 'el3',
        title: 'Gift',
        amount: 1300,
        date: new Date(2021, 8, 16),
     },
     {
        id: 'el4',
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
