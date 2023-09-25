import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Statistics = () => {

    const [donatedBoxes, setDonatedBoxes] = useState(0);
    const totalBoxes = 12;

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('donations'));

        if (storedData) {
            const storedDataLength = storedData.length;
            setDonatedBoxes(storedDataLength);
        }
        else{
            setDonatedBoxes(0)
        }

    }, [])

    const percentageDonated = ((donatedBoxes / totalBoxes) * 100).toFixed(2);
    const percentageRemaining = (100 - percentageDonated).toFixed(2);

    const data = {
        labels: ['Donated', 'Remaining'],
        datasets: [
            {
                data: [percentageDonated, percentageRemaining],
                backgroundColor: ['red', 'green']
            }
        ]
    };

    const options = {}

    return (
        <div className='mt-4'>

            <div className='mx-auto w-[300px] sm:w-1/2 p-10'>
                <Pie data={data} options={options}>

                </Pie>
            </div>


        </div>
    );
};

export default Statistics;