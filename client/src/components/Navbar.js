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
        <Link to="/">Home</Link>   
      </div>
      <img className="header_image" src={image} alt="oops"></img>

      <div> 
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/View">View</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
