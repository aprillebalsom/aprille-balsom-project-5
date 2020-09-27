import React from 'react';


class Wishlist extends React.Component {

    render(){
        return (
       
          <li key={this.props.key}>
            <p>{this.props.key}</p>
            <img src={this.props.imageSrc} alt={this.props.imageAlt} />

            <p>{this.props.name}</p>
            <button onClick={this.props.removeItem}>garbage icon</button>
          </li>
    
        );
    }
}


export default Wishlist;