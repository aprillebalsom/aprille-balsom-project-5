import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-solid-svg-icons";

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
const star = <FontAwesomeIcon icon={faStar} />;


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

          <ul>
            <li>
              <a href="">{star}</a>
            </li>

            <li>
              <a href="">{shoppingCart}</a>
            </li>
          </ul>
        </div>
      </div>
    );
} 

export default Nav;