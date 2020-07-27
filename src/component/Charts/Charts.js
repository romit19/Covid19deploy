import React, { useEffect, useState } from 'react'
import { dailyFetchData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await dailyFetchData())
        }

        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColour: '#333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColour: 'red',
                    backgroundColor: 'rga(255,0,0)',
                    fill: true
                }]
            }}
        />) : null
    )

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current State in ${country}` }
                    }}
                />
            ) : null
    )


    return (
        <div className='container'>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart