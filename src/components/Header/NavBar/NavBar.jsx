import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export let userId = '';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);
  if(user){
    userId = user.uid;
  }

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success(`${user.displayName}, you are logged out!`)
    })
    .catch(err => toast.error(err.message));
  }

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className="navbar bg-transparent max-w-[1320px] mx-auto py-5">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
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
        </div>
        <div className="flex gap-4 items-center">
        <img src="https://i.ibb.co/P6sswT9/logo.png" className="w-1/3 " />
        <a className="normal-case text-2xl hidden lg:inline-flex gap-0">  
          Max<span className="text-btnColor">Speed</span>
        </a>
        
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal  px-1 hidden lg:flex lg:gap-5 text-base">
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
        <div className="text-xs lg:text-sm font-semibold">{user.displayName}</div>
        <div>
        <button className="btn text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-btnColor dark:hover:bg-black hover:bg-btnColor border-none" onClick={handleLogOut}>Log Out</button>
        </div>
        </div>
        :
        <Link to="/login"><button className="btn text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-btnColor dark:hover:bg-black hover:bg-btnColor border-none">Login</button></Link>
      }

      <button onClick={handleThemeSwitch} id="theme-toggle" type="button" className="text-white font-semibold dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-btnColor dark:hover:bg-black hover:bg-btnColor rounded-lg text-xs lg:text-sm px-5 py-2 lg:p-3.5 ml-2">
        SWITCH THEME
      </button>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default NavBar;
