
import React, {useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const ChartData = props => {
    const [yourState, setYourState] = useState('');

    const chart = () => {
        setYourState({
            labels: ['x', 'y'],
            datasets: [
                {
                    level: 'level of xyz',
                    data: [22, 55]
                }
            ]
        })

    }

    useEffect(() => {
        chart()

    }, [])
    return(
        <div>
            <div>
                <Line data={yourState}/>
            </div>
        </div>
    )
}

export default ChartData;