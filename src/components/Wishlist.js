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
          <span className='sr-only'>Click here to remove this item from your wishlist.</span>
          <FontAwesomeIcon icon={this.props.trash} title='remove item'/>
        </button>
        
      </li>
    );
  }
}

export default Wishlist;