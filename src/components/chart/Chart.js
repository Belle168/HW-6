import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) =>{
const dataPointsValues = props.dataPoints.map((data) => data.value);  // расходы которые находятся в массиве,перебираем и возвращаем новый массив элементов
const totalMax = Math.max(...dataPointsValues)  // с помощью Math.max самые большие расходы присвоили в переменную

return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) =>{ // после перебора массивов передаем в ChartBar
            <ChartBar // компонента отвечает за статистику
            key={dataPoint.label} //в key передали label, потому что они уникальные
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
            />
        })}
    </div>
 );
};

export default Chart;