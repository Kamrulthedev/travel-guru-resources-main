import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navber = () => {

    const NavLinks = <>
        <li><NavLink to={'/'}>News</NavLink></li>
        <li><NavLink to={'/Destination'}>Destination</NavLink></li>
        <li><NavLink to={'/Blog'}>Blog</NavLink></li>
        <li><NavLink to={'/Contact'}>Contact</NavLink></li>
    </>



    return (
        <div>
            <div className="navbar  shadow-lg">
            <div className="ml-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className=" w-20 ">
                        <img src={logo} alt="" />
                    </a>

                </div>

                <div className=" flex justify-end ml-80">
                     <input type="text" className="w-60 border-2 rounded-lg" />

                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>

                    <div className="text-end">
                        <a className="btn">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;