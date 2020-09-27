import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Nav extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     listShown: false,
  //   };
  // }

  // showList = () => {
  //   let tosetListState = this.listShown;

  //   tosetListState = true;

  //   this.setState({
  //     listShown: tosetListState,
  //   }, () => {
  //     this.sendToParent(this.state.listShown);
  //   })

  //   console.log(this.state.listShown);
  // }

  // sendToParent = (stateofList) => {
  //   this.props.listFunc(stateofList);
  // }
  

  render() {
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
              <button onClick={this.showList}>
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