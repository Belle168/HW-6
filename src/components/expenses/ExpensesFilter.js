import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) =>{
       const selectChangeHandler = (event) =>{ // функция обработчик события select
        props.onChangeFilter(event.target.value) // передаем value(select) при onChange
       }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                
                <label>Filter by year</label>
                
                <select value={props.selected} onChange={selectChangeHandler}> {/*двусторонняя привязка*/}
                    
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="All">Select All</option>

                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;