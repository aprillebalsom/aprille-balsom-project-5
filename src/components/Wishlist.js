import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Wishlist extends React.Component {
  render(){
    return (
      <li className='wishlist-flex' key={this.props.itemKey}>
        
        <img src={this.props.src} alt={this.props.alt} />

        <p>{this.props.name}</p>

        {/* on click, call the removeItem function in the app.js component */}
        <button className='icon-button' onClick={this.props.removeItem}>
          <p className='sr-only'>Click the "trash can" icon to remove this item from your wishlist.</p>
          <FontAwesomeIcon icon={this.props.trash} />
        </button>
        
      </li>
    );
  }
}

export default Wishlist;