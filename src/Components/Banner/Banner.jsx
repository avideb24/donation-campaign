import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({textData}) => {

    const handleSearch = () => {
        const input = document.getElementById('inputField');
        const inputValue = input.value;
        textData(inputValue);
    }

    return (
        <div className="banner absolute left-0 top-0 w-full z-10">
            <div className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
                <div className="absolute z-10 left-0 top-0 w-full h-full bg-white opacity-80"></div>
                <div className="max-w-7xl mx-auto relative z-20 text-center mt-20">
                    <h1 className="text-black text-xl xl:text-5xl lg:text-4xl sm:text-3xl font-bold mb-10">I Grow By Helping People In Need</h1>
                    <div className='flex justify-center items-center'>
                        <input id='inputField' type="text" placeholder="Search Category..." className="input input-bordered w-48 sm:w-full max-w-xs rounded-tr-none rounded-br-none bg-white border-2 border-[#f87272]" />
                        <button onClick={handleSearch} className="btn btn-error text-white rounded-tl-none rounded-bl-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    textData: PropTypes.func
}

export default Banner;