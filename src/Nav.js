import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => {
    return (
      <div className="nav">
        <div className="flex-header wrapper">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <ul className="nav-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon="star" />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon="shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
} 

export default Nav;