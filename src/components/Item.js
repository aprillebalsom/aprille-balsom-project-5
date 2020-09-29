import React from "react";
import ToggleDisplay from 'react-toggle-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
	constructor() {
		super();

		this.state = {
			showSticker: false,
		};
	}

	//check if wallpaper has already been added
	//if yes, alert the user
	//if no, call function that changes the state
	toggleSticker = () => {
		this.state.showSticker === true
			? this.callAlertFunc()
			: this.updateStickerState();
	};


	callAlertFunc = () => {
		this.props.showAlert();
	};

	// change the state of the sticker and call then next function
	updateStickerState = () => {
		this.setState({
				showSticker: !this.state.showSticker,
			},
			() => {
				this.callAddItemFunc();
			});
	};

	// pass information back to parent
	callAddItemFunc = () => {
		this.props.addToWishlist(this.props.addItem);
	};

	//check to see if showfave state is true
	// if true, call revert state
	// changeStickerState = () => {

	//     this.state.showFave === true ? this.revertState(): ''
	// }

	// revert back to original state (false) when called
	// thus removing wishlist sticker
	// revertState = () => {
	// 	this.setState(
	// 		{
	// 			showFave: !this.state.showFave,
	// 		},
	//     )
    // }

	render() {
		return (
			<li key={this.props.itemKey}>
				<div className='item'>
					<div className='item-img'>
						<img src={this.props.src} alt={this.props.alt} />

						<ToggleDisplay show={this.state.showSticker}>
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