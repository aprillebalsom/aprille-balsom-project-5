import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {

	constructor() {
		super();

		this.state = {
			showWishlist: false,
		};
	}

	//create a function that changes the wishlist state
	//this will open/close the wishlist when event is triggered
	toggleWishlist = () => {
    	//set the state that toggles the wishlist
		this.setState(
			{
				showWishlist: !this.state.showWishlist,
			},
			//call the function that passes the state back to the parent
			() => {
				this.callToggleFunc(this.state.showWishlist);
			}
		);
  	};

	//create a function that calls a function in the parent component and passes the current wishlist state as an arugment to display/hide the wishlist
	callToggleFunc = (stateOfwishList) => {
		this.props.toggleList(stateOfwishList);
	};

	render() {
		return (
			<div className='nav'>
				<div className='flex-header wrapper'>
					<nav>
						<ul>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#shop'>Shop</a>
							</li>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#blog'>Blog</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</nav>

					<ul className='nav-icons'>
						<li>
							{/* when button is clicked, call the toggle wishlist function*/}
							<button className='icon-button' onClick={this.toggleWishlist}>
								<span className='sr-only'>
									Click this here to open your wishlist.
								</span>
								<FontAwesomeIcon icon='star' title='wishlist' />
							</button>
						</li>

						<li>
							<button className='icon-button'>
								<span className='sr-only'>
									Click the here to open your shopping cart.
								</span>
								<FontAwesomeIcon icon='shopping-cart' title='shopping cart'/>
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
} 

export default Nav;