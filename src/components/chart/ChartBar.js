import './ChartBar.css';

const ChartBar = (props) =>{
let barFillHeight = '0%'; // создали переменную по умолчанию 0%, т.е если не было никаких расходов за месяц то по умолчанию будет 0%
if(props.maxValue > 0) { // если maxValue больше > 0 то код аткарылат, а если равно к 0 то за месяц расходов не было
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // с помощью этой формулы, можем увидеть статистику наших расходов
 }
 return (
     <div className='chart-bar'>
         <div className='chart-bar__inner'>
<div className='chart-bar__fill' style={{height: barFillHeight}} // переменную(barFillHeight) передали сюда
></div>
         </div>
         <div className='chart-bar__label'>{props.label}</div> {/*label передали сюда,он хранит в себе месяцы*/}
     </div>
 )
};

export default ChartBar;