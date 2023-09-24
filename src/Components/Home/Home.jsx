import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donation from "../Donation/Donation";

const Home = () => {
    
    const donations = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl py-20 mx-auto grid grid-cols-4 gap-7">
                {
                    donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>
            
        </div>
    );
};

export default Home;