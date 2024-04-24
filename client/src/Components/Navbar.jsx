


import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/souTour.png";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        backgroundImage:
          "radial-gradient( circle 325px at 19.2% 64.8%, rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3% )",
        padding: "1rem", // Add some padding for visual consistency
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {/* Responsive Navigation Toggle for Small and Medium Devices */}
      <Button
        variant="contained"
        sx={{ display: { xs: "flex", md: "none", backgroundImage:
        "radial-gradient( circle 325px at 19.2% 64.8%, rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3% )" }, color: "#ffffff" }}
        onClick={toggleMobileNav}
      >
        {mobileNavOpen ? "Close" : "Menu"}
      </Button>

      {/* Navigation Links (Visible on All Devices) */}
      <Stack
        direction="row"
        spacing={2} // Add spacing between buttons
        sx={{ display: { xs: mobileNavOpen ? "flex" : "none", md: "flex" }, backgroundImage:
        "radial-gradient( circle 325px at 19.2% 64.8%, rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3% )", }}
      >
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#ffffff", fontWeight: "bolder" }}>
            Home
          </Button>
        </Link>
        <Link to="/BookNow" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#ffffff", fontWeight: "bolder" }}>
            Book Now
          </Button>
        </Link>
        <Link to="/Tours" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#ffffff", fontWeight: "bolder" }}>
            Tours
          </Button>
        </Link>
        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#ffffff", fontWeight: "bolder" }}>
            Contact
          </Button>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#ffffff", fontWeight: "bolder" }}>
            Login
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
