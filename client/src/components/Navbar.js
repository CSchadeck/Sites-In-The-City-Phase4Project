import React from "react";
import { Link } from "react-router-dom";
import image from "../images/cityskyline.jpg";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <header>
      <img className="header_image" src={image} alt="oops"></img>
      <div>
        <Link to="/" className="raise">Home</Link>
      </div>
      <div>
        {user ? (
          <div>
            <Link to="/View" className="raise">View</Link>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/signup" className="raise">SignUp</Link>
            <Link to="/login" className="raise">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
