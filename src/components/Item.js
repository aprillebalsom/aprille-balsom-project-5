import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {

	//create a function to check if wallpaper has already been added to wishlist 
	//if true, call the function that tells the user it's already been added
	//if false, call the function that adds the item to the wishlist
	checkWishlist= () => {

		this.props.showSticker === true
		? this.callModalFunc()
		: this.callAddFunc();
	};

	//create a function that calls another function in the parent component to display a modal
	callModalFunc = () => {
		this.props.showModal();
	};

	// create a function the calls another function in the parent component that adds the wallpaper to the wishlsit
	callAddFunc = () => {
		this.props.addToWishlist(this.props.addItem);
	};

	render() {
		return (
			<li key={this.props.itemKey}>

				<div className='item'>
					<div className='item-img'>
						<img src={this.props.src} alt={this.props.alt} />

						{/* toggles the display of the star sticker */}
						<ToggleDisplay show={this.props.showSticker}>
							<span className='sr-only'>
								This wallpaper is in your wishlist!
							</span>
							<FontAwesomeIcon  className='star-sticker'icon='star' title='starred'/>
						</ToggleDisplay>

					</div>

					<h3>{this.props.title}</h3>
					<h4>$5.00</h4>
				</div>

				{/* on click, call the checkWishlist function */}
				<button onClick={this.checkWishlist}>Add to wishlist</button>

			</li>
		);
	}
}

export default Item;