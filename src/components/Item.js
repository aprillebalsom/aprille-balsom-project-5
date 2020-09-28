import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
	constructor() {
		super();

		this.state = {
			showFave: false,
		};
	}

    //check if wallpaper has already been added
    //if yes, alert the user
    //if no, call function that changes the state
	toggleSticker = () => {
		this.state.showFave === true ? alert(`looks like you really like that one, it's already in your wishlist!`) : this.newState();
	};

	// change the state of the sticker and call then next function
	newState = () => {
		this.setState(
			{
				showFave: !this.state.showFave,
			},
			() => {
				this.callAddItemFunc();
			}
		);
	};

	// pass information back to parent
	callAddItemFunc = () => {
		this.props.addToWishlist(this.props.addItem);
    };
    
    // updateStickerState = (newState) => {
    //     this.setState ({
    //         showFave: newState,
    //     },
    //     () => {
    //         this.removeSticker()
    //     })
    // }

	render() {
		return (
			<li key={this.props.itemKey}>
				<div className='item'>
					<div className='item-img'>
						<img src={this.props.src} alt={this.props.alt} />

						<ToggleDisplay show={this.state.showFave}>
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