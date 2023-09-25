import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const DonationDetails = () => {

    const donations = useLoaderData();

    const params = useParams();
    const id = parseInt(params.id);

    const donation = donations.find(donation => donation.id === id);

    const handleDonate = () => {
        const donationsArr = [];

        const addedDonation = JSON.parse(localStorage.getItem('donations'));
        if (!addedDonation) {
            donationsArr.push(donation)
            localStorage.setItem('donations', JSON.stringify(donationsArr))
            toast.success('You Have Donated Successfully.');
            return
        }
        else {
            const existDonation = addedDonation.find(item => item.id === donation.id);

            if (existDonation) {
                toast.error("You Can't Donate Twice.");
                return 
            }
            else {
                donationsArr.push(...addedDonation, donation)
                localStorage.setItem('donations', JSON.stringify(donationsArr))
                toast.success('You Have Donated Successfully.');
                return
            }

        }
    }


    return (
        <div className="max-w-7xl mx-auto pb-16">
            <div className="relative">
                <img className="w-full h-[500px] object-cover rounded-lg" src={donation.img} alt="img" />
                <div className="absolute z-10 w-full h-24 left-0 bottom-0 bg-black opacity-60 rounded-b-lg"></div>
                <button onClick={handleDonate} className="absolute left-7 bottom-6 z-20 text-white px-4 py-3 rounded-lg" style={{backgroundColor: `${donation.text_color}`}}>Donate ${donation.price}</button>
                <Toaster></Toaster>
            </div>
            <h2 className="text-black text-3xl font-bold my-6 pt-4">{donation.title}</h2>
            <p className="text-justify">{donation.description}</p>
        </div>
    );
};

export default DonationDetails;