import './ChartBar.css';
import ChartBar from './ChartBar';
const Chart = (props) => {


    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(dataPointValues)
    const totalMax = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
            key = {dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMax} 
            label={dataPoint.label}></ChartBar>
        ))}
    </div>

};
export default Chart;