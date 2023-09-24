import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const donations = useLoaderData();

    const params = useParams();
    const id = parseInt(params.id);

    const donation = donations.find(donation => donation.id === id);

    return (
        <div className="max-w-7xl mx-auto pb-16">
            <div className="relative">
                <img className="w-full h-[500px] object-cover rounded-lg" src={donation.img} alt="img" />
                <div className="absolute z-10 w-full h-24 left-0 bottom-0 bg-black opacity-60 rounded-b-lg"></div>
                <button className="btn btn-error absolute left-7 bottom-6 z-20 text-white px-6">${donation.price}</button>
            </div>
            <h2 className="text-black text-3xl font-bold my-6 pt-4">{donation.title}</h2>
            <p className="text-justify">{donation.description}</p>
        </div>
    );
};

export default DonationDetails;