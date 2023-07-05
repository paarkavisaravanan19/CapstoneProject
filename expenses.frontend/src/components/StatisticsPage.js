import { Doughnut } from "react-chartjs-2"; 
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getExpensesPerCategory } from "../services/statistics";
import { useEffect, useState } from "react";
import image from '../images/statistics.jpg';

const StatisticsPage = () =>
{
    const dispatch= useDispatch();
    const expenseAmountPerCategory = useSelector(state => 
        state.statisticsSlice.expenseAmountPerCategory);
    
        const [doughnut, setDoughnut] =useState(
            {
                labels: [],
                data: [],
            }
        );
        useEffect(()=> {
            setDoughnut({
                labels: expenseAmountPerCategory.map(x=> x.key),
                data: expenseAmountPerCategory.map(x=> x.value),
            })
        }, [expenseAmountPerCategory]);

        useEffect(()=>
        {
            getExpensesPerCategory(dispatch);
        }, []);
        console.log(doughnut.data);
    const data = {
        labels: doughnut.labels,
        datasets: [
            {
                label: 'EXPENSES PER CATEGORY',
                data: doughnut.data,
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: [
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
            ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
            
        ]
    }

    const data1 = {
        labels: ['slice','sample','demo'],
        datasets: [
            {
                label: 'EXPENSES PER CATEGORY',
                data: [10,3,4],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: [
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
            ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
            
        ]
    }

    return <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length}
    style={{maxWidth:'20rem',maxHeight:'20rem', margin:'auto', textAlign:'center'}}>
        <h4 style={{marginTop:'10px', fontFamily: 'Times New Roman'}}>EXPENSES PER CATEGORY</h4>
        <Chart type='line' data={data} />
        <Doughnut data={data}/>
        <div>
        <img src={image} style={{height : "280px", width: "300px", position: 'absolute',
right: '0px',
bottom: '0px' }} alt="Description of the image" />
        </div>

    </div>
};

export default StatisticsPage;
