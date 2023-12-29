"use client";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [highlighted, setHighlighted] = useState("All");
  return (
    <main>
      <div className="nav">
        <div className="nav-name">
          <p className="nav-text">nsrg</p>
        </div>
        <div>
          <nav className="main-nav">
            <ul className="nav-ele">
              <li
                className={`${
                  highlighted === "All" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("All");
                }}
              >
                All
              </li>
              <li
                className={`${
                  highlighted === "About" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("About");
                }}
              >
                About
              </li>
              <li
                className={`${
                  highlighted === "Projects" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("Projects");
                }}
              >
                Projects
              </li>
              <li
                className={`${
                  highlighted === "Favourites" ? "highlighted" : ""
                } elements`}
                onClick={() => {
                  setHighlighted("Favourites");
                }}
              >
                Favourites
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Link href="mailto:nisjp.14@gmail.com" className="mail-link">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div>Test changes</div>
    </main>
  );
};

export default page;
