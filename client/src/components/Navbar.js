import React from "react";
import { Link } from "react-router-dom";
import image from "../images/Black_city_silhouette1.jpg";

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
      <div>
        <Link to="/" className="raise">Home</Link>   
      </div>
      <img className="header_image" src={image} alt="oops"></img>

      <div> 
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/View" className="raise">View</Link>
            <Link to="/signup" className="raise">SignUp</Link>
            <Link to="/login" className="raise">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
