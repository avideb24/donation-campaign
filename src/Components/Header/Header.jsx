import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto py-4 bg-transparent relative z-30">
            <div className=" flex sm:justify-between sm:flex-row flex-col items-center">
                <div>
                    <Link to='/'>
                        <img className="w-40" src="https://i.ibb.co/3RFDDW1/Logo.png" alt="logo" />
                    </Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donations" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Donations</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;