import { Doughnut } from "react-chartjs-2"; 

const StatisticsPage = () =>
{
    const data={
        lables : ['Shopping', 'Credit Card'],
        datasets : [{
            data:[10, 3],
            backgroundColor : [
                '#007bff', //blue
                '#FF0000', //red
                '#FFD700', //yellow
                '#28a745', //green
                '#FF00FF', //violet
                '#ff9900', //orange
                '#00FFFF', //aqua marine
                '#d69ae5', //red violet
                '#FF8F66', //orange red
                '#00FF00', //lime
            ]
        }]
    }
    return <div
    style={{maxWidth:'35rem',maxHeight:'35rem', margin:'auto', textAlign:'center'}}>
        <h4 style={{marginTop:'10px'}}>Expenses per category</h4>
        <Doughnut data={data}/>

    </div>
};

export default StatisticsPage;
