 import React from "react";
 import Chart from "../chart/Chart";
 
 
 const ExpensesChart = (props) =>{ // компонента показывающая статистику расходов
    const chartDataPoints = [ // здесь хранится название месяцев и потраченные расходы поступают на value
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for(const expense of props.allExpenses){ // перебираем отфильтрованный массив
      const expenseMonth = expense.date.getMonth(); // в пременную присвоили месяцев, вместо индексов берем эти месяцы, когда они нам нужны. Н: Jan[0],Feb[1],March[2]
      chartDataPoints[expenseMonth].value += expense.amount // поступают расходы за месяц
    }

return <Chart dataPoints={chartDataPoints}/> // как пропс передаём дочернему компонету Chart наш массив статистики

};

export default ExpensesChart;