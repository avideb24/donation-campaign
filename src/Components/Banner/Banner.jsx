import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="py-20 sm:py-40 relative">
                <div className="absolute z-10 left-0 top-0 w-full h-full bg-white opacity-80"></div>
                <div className="max-w-7xl mx-auto relative z-20 text-center">
                    <h1 className="text-black text-xl xl:text-5xl lg:text-4xl sm:text-3xl font-bold mb-10">I Grow By Helping People In Need</h1>
                    <div>
                        <input type="text" placeholder="Search Category..." className="input input-bordered w-48 sm:w-full max-w-xs rounded-tr-none rounded-br-none" />
                        <button className="btn btn-error text-white rounded-tl-none rounded-bl-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;