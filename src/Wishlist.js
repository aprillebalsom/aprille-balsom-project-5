import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Wishlist extends React.Component {
  render(){
    return (
      <li className="wishlist-flex" key={this.props.key}>
        
        <img src={this.props.imageSrc} alt={this.props.imageAlt} />

        <p>{this.props.name}</p>
        <button onClick={this.props.removeItem}>
          <p className="sr-only">Click here to remove this item from your wishlist.</p>
          <FontAwesomeIcon icon={this.props.trash} />
        </button>
      </li>
    );

  }
}


export default Wishlist;