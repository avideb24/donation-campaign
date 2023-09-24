import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {

    const { id, img, title, category, text_color, category_bg, card_bg } = donation;

    return (
        <div>
            <Link to={`/donation/${id}`}>
                <img src={img} alt="" />
                <div className='p-5 rounded-b-lg' style={{ backgroundColor: `${card_bg}`, color: `${text_color}` }}>
                    <p className='inline-block p-1 rounded px-2 text-sm' style={{ backgroundColor: `${category_bg}` }}>{category}</p>
                    <h2 className='text-xl font-semibold mt-2'>{title}</h2>
                </div>
            </Link>
        </div>
    );
};

Donation.propTypes = {
    donation: PropTypes.object,
}

export default Donation;