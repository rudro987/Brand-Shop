import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success(`${user.displayName}, you are logged out!`)
    })
    .catch(err => toast.error(err.message));
  }

  return (
    <div className="navbar bg-transparent max-w-[1320px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl hidden lg:inline-flex">
          MaxSpeed
        </a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/add-product"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/my-cart"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              My Cart
            </NavLink>
          </li>
        </ul>
        <a className="btn btn-ghost normal-case text-xl lg:hidden inline-flex">
          MaxSpeed
        </a>
      </div>
      <div className="navbar-end">
      {
        user ?
        <div className="flex justify-center items-center gap-4">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img src={user.photoURL || `https://i.ibb.co/sH0Fh3T/user.png`} alt={user.displayName} />
        </div>
      </label>
        <div className="text-sm font-semibold">{user.displayName}</div>
        <div>
        <button className="btn" onClick={handleLogOut}>Log Out</button>
        </div>
        </div>
        :
        <Link to="/login"><button className="btn">Login</button></Link>
      }
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default NavBar;
