import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  toggleWishlist = () => {
    this.setState({
      show: !this.state.show,
    }, 
    () => {
        this.transferState(this.state.show);
    });
  };

  transferState = (stateOfList) => {
   
    this.props.toggleList(stateOfList);
  };

  render() {
    return (
      <div className="nav">
        <div className="flex-header wrapper">
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <ul className="nav-icons">
            <li>
              {/* TODO add sr-only or aria hidden classes */}
              <button
                onClick={() => {
                  this.toggleWishlist();
                }}
              >
                <FontAwesomeIcon icon="star" />
              </button>
            </li>

            <li>
              <button>
                <FontAwesomeIcon icon="shopping-cart" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
} 

export default Nav;