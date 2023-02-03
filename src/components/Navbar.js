import React from "react";
import { useState } from "react";
import Reordericon from "@mui/icons-material/Reorder"
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav>
        <h2 className="nav__logo">
          st <span className="v__shape">V</span> dy
        </h2>
        <ul className="nav__links" id={showLinks ? "hidden" : ""}>
          <li className="nav__item">Browser</li>
          <li className="nav__item">Bootcamps</li>
          <li className="nav__item">How it works</li>
          <li className="nav__item">Testemonial</li>
        </ul>
        <button
          className="collapse__btn"
          onClick={() => setShowLinks(!showLinks)}
        >
          <Reordericon />
        </button>
        <button className="nav__button">
          <h4 className="nav__about-us">About us</h4>
        </button>
      </nav>
    </>
  );
}
