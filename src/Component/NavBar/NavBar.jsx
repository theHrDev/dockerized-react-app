import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar    bg-primarytwo mx-auto lg:w-[50%] md:w-[70%] w-[98%] border rounded-badge">
        <div className="flex items-center justify-between  w-full">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              shelfly
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-none">
            <ul className="menu menu-horizontal md:gap-3  px-1">
              {/* Home */}
              <li>
                <NavLink 
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-supporting font-bold" : "hover:text-supporting"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Browse */}
              <li>
                <NavLink 
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "text-supporting font-bold" : "hover:text-supporting"
                  }
                >
                  Browse
                </NavLink>
              </li>

             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
