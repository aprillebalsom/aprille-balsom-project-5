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
	toggleWishlist = () => {
    	//set the state that toggles the wishlist
		this.setState(
			{
				showWishlist: !this.state.showWishlist,
			},
			//call the function that passes the state back to the parent
			() => {
				this.transferState(this.state.showWishlist);
			}
			);
  	};

	//create a function that sends current wishlist state back to parent to display/hide the wishlist
	transferState = (stateOfwishList) => {
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
								<p className='sr-only'>
									Click this "star" icon to open your wishlist.
								</p>
								<FontAwesomeIcon icon='star' />
							</button>
						</li>

						<li>
							<button className='icon-button'>
								<p className='sr-only'>
									Click the "shopping cart" icon to open your shopping cart.
								</p>
								<FontAwesomeIcon icon='shopping-cart' />
							</button>
						</li>
					</ul>
					
				</div>
			</div>
		);
	}
} 

export default Nav;