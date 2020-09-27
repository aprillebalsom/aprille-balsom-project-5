import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Wishlist extends React.Component {
  render(){
    return (
      <li className="wishlist-flex" key={this.props.key}>
        
        <img src={this.props.imageSrc} alt={this.props.imageAlt} />

        <p>{this.props.name}</p>
        <button onClick={this.props.removeItem}>
          <FontAwesomeIcon icon={this.props.trash} />
        </button>
      </li>
    );

  }
}


export default Wishlist;