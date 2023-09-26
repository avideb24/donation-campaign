import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donation from "../Donation/Donation";
import { useEffect, useState } from "react";

const Home = () => {

    const donations = useLoaderData()

    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        setDisplayData(donations);
    }, [donations])

    const textData = (value) => {
        if (value === 'education') {
            const filteredData = donations.filter(item => item.category == 'Education')
            setDisplayData(filteredData)
        }
        else if (value == 'health') {
            const filteredData = donations.filter(item => item.category == 'Health')
            setDisplayData(filteredData)
        }
        else if (value == 'clothing') {
            const filteredData = donations.filter(item => item.category == 'Clothing')
            setDisplayData(filteredData)
        }
        else if (value == 'food') {
            const filteredData = donations.filter(item => item.category == 'Food')
            setDisplayData(filteredData)
        }
        else {
            setDisplayData(donations)
        }
    }

    return (
        <div>
            <Banner textData={textData}></Banner>
            <div className="max-w-7xl py-10 sm:py-20 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-4 xl:mt-96 md:mt-96 sm:mt-80 mt-60 xl:pt-28">
                {
                    displayData.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>

        </div>
    );
};

export default Home;