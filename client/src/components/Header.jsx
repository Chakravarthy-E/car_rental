import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ height: "40px" }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Origin: {origin}</a> {/* eslint-disable-next-line */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destination: {destination}</a> {/* eslint-disable-next-line */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Start Date: {startDate}</a> {/* eslint-disable-next-line */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">End Date: {endDate}</a> {/* eslint-disable-next-line */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

