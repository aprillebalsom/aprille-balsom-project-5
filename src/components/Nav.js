import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {

  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  //set the state and pass it into transfer state fucntion
  toggleWishlist = () => {
    this.setState({
      show: !this.state.show,
    }, 
    () => {
        this.transferState(this.state.show);
    });
  };

  //send current state back to parent to apply
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
              {/* toggle the wishlist on click */}
              <button
                onClick={() => {
                  this.toggleWishlist();
                }}
              >
                <p className="sr-only"> Click here to open your wishlist.</p>
                <FontAwesomeIcon icon="star" />
              </button>

            </li>

            <li>

              <button>
                <p className="sr-only"> Click here to open your shopping cart.</p>
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