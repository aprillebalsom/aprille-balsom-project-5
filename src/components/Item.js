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

	toggleSticker = () => {
		this.setState({
			showFave: !this.state.showFave,
		}, () => {
            this.callAddItemFunc();
        });
    };
    
    callAddItemFunc = () => {
        this.props.addToWishlist(this.props.addItem);
    }

	render() {
		return (
			<li key={this.props.key}>
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

				<button
					onClick={this.toggleSticker}
				>
					Add to wishlist
				</button>

				{this.state.showFave === true && (
					<p className='star-sticker'>
						<FontAwesomeIcon icon='star' />
					</p>
				)}
			</li>
		);
	}
}

export default Item;