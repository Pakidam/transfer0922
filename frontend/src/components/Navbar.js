import React, { useState, useEffect } from "react";
import LoggedInNavbar from "./LoggedInNavbar";
import LoggedOutNavbar from "./LoggedOutNavbar";

const Navbar = () => {
  return (
    <div>
      {window.localStorage.loggedUser ? (
        <LoggedInNavbar />
      ) : (
        <LoggedOutNavbar />
      )}
    </div>
  );
};

export default Navbar;
