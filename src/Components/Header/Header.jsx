import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
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