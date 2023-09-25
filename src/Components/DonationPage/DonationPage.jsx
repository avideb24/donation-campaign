import { useEffect, useState } from "react";

const DonationPage = () => {

    const [donations, setDonations] = useState([]);
    const [noData, setNoData] = useState();
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const storedDonation = JSON.parse(localStorage.getItem('donations'))

        if (storedDonation) {
            setDonations(storedDonation)
        }
        else {
            setNoData('No Data Found')
        }

    }, [])


    return (
        <div className="max-w-7xl mx-auto py-10">
            <div>
                {
                    donations.length === 0 ? <div className="flex justify-center items-center w-full h-[100vh]">{noData}</div> :
                        <div>
                            {
                                isShow ?
                                <div className="flex flex-wrap justify-center gap-4">
                                        {
                                            donations.map(donation =>
                                                <div key={donation.id} className="flex w-[350px] md:w-[600px]">
                                                    <img className="rounded-bl-lg w-1/2 object-cover rounded-tl-lg rounded-tr-none" src={donation.img} alt="" />
                                                    <div className='p-5 rounded-tr-lg rounded-br-lg flex-grow' style={{ backgroundColor: `${donation.card_bg}`, color: `${donation.text_color}` }}>
                                                        <p className='inline-block p-1 rounded px-2 text-sm' style={{ backgroundColor: `${donation.category_bg}` }}>{donation.category}</p>
                                                        <h2 className='text-xl font-semibold mt-2'>{donation.title}</h2>
                                                        <p>${donation.price}</p>
                                                        <button className="text-white px-4 py-3 rounded-lg mt-4" style={{ backgroundColor: `${donation.text_color}` }}>View Details</button>
                                                    </div>
                                                </div>)
                                        }
                                    </div> :
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {
                                            donations.slice(0, 2).map(donation =>
                                                <div key={donation.id} className="flex w-[350px] md:w-[600px]">
                                                    <img className="rounded-bl-lg w-1/2 object-cover rounded-tl-lg rounded-tr-none" src={donation.img} alt="" />
                                                    <div className='p-5 rounded-tr-lg rounded-br-lg flex-grow' style={{ backgroundColor: `${donation.card_bg}`, color: `${donation.text_color}` }}>
                                                        <p className='inline-block p-1 rounded px-2 text-sm' style={{ backgroundColor: `${donation.category_bg}` }}>{donation.category}</p>
                                                        <h2 className='text-xl font-semibold mt-2'>{donation.title}</h2>
                                                        <p>${donation.price}</p>
                                                        <button className="text-white px-4 py-3 rounded-lg mt-4" style={{ backgroundColor: `${donation.text_color}` }}>View Details</button>
                                                    </div>
                                                </div>)
                                        }
                                    </div>
                            }
                        </div>
                }
            </div>
            <div className="text-center">
                {
                    donations.length > 2 &&
                    <div>
                        {
                            isShow === false ?
                                <div className="text-center my-4 ">
                                    <button onClick={() => setIsShow(!isShow)} className="btn btn-success text-white">See More</button>
                                </div> : 
                                ''
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default DonationPage;