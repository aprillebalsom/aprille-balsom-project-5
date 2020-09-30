import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {

	//check if wallpaper has already been added
	//if yes, alert the user
	//if no, call function that changes the state
	toggleSticker = () => {
		this.props.showSticker === true
			? this.callModalFunc()
			: this.updateStickerState();
	};


	callModalFunc = () => {
		this.props.showModal();
	};

	// change the state of the sticker and call then next function
	updateStickerState = () => {
		this.props.addToWishlist(this.props.addItem);
	};

	render() {
		return (
			<li key={this.props.itemKey}>
				<div className='item'>
					<div className='item-img'>
						<img src={this.props.src} alt={this.props.alt} />

						<ToggleDisplay show={this.props.showSticker}>
							<p className='star-sticker'>
								<FontAwesomeIcon icon='star' />
							</p>
						</ToggleDisplay>
					</div>

					<p>{this.props.title}</p>
					<p>$5.00</p>
				</div>

				<button onClick={this.toggleSticker}>Add to wishlist</button>
			</li>
		);
	}
}

export default Item;