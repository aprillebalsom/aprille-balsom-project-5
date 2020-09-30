import React from 'react';
import firebase from './firebase';
import ToggleDisplay from 'react-toggle-display';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart,faStar,faCodeBranch,faTrash,faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

//IMPORTING OF OTHER COMPONENTS
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Wishlist from './components/Wishlist.js';
import Item from './components/Item.js';
import Footer from './components/Footer.js';

library.add(fab, faShoppingCart, faStar, faCodeBranch, faTrash, faTimes);

// TODO
// ensure all icons have addtional sr-only info
//add skiplink
//remove hover states on mobile nav
//merge branch
//push to gh-pages and test 

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			wallpapers: [],
			wishlist: [],
			showWishlist: false,
			showModal: false,
		}
	}

	componentDidMount() {

    	//get wallpaper information from database
		const dbRef = firebase.database().ref();

		dbRef.on('value', (response) => {
			const toSetState = [];
			const data = response.val();

			//push wallpaper data from database into a new array 
			for (let key in data.wallpapers) {

				toSetState.push({
					item: data.wallpapers[key],
					key: key,
				});
			}

			//use new wallpaper data array to set the state
			this.setState({
				wallpapers: toSetState,
			});
		});

		//get wishlist information from database
		const dbRefWishlist = firebase.database().ref('wishlistItems');

		dbRefWishlist.on('value', (response) => {
			const toSetState = [];
			const data = response.val();

			//push wishlist data from database into a new array
			for (let key in data) {
				toSetState.push({
					key: key,
					item: data[key].item,
				});
			}

			//use new wishlist data array to set the state
			this.setState({
				wishlist: toSetState,
			});
		});
  	}

	//create a function that adds an item to the wishlist + firebase when a user clicks the "add to wishlist" button
	addItem = (itemToBeAdded) => {
		const dbRef = firebase.database().ref('wishlistItems');
		dbRef.push(itemToBeAdded);
	};

	// create a function to remove items from the wishlist + firebase when the user clicks the "garbage can" icon
	removeItem = (itemToBeRemoved) => {
		const dbRef = firebase.database().ref('wishlistItems');
		dbRef.child(itemToBeRemoved).remove();
	};

	//create a function that displays the wishlist when the user clicks the "star" icon 
	wishlistToggle = () => {

		//update the state of the wishlist being displayed
		this.setState({
			showWishlist: !this.state.showWishlist,
		});
	};

	//create a function that displays a modal when the user attempt to add a wallpaper to their wishlist twice 
	displayModal = () => {

		//update the state of the modal being displayed
		this.setState({
			showModal: !this.state.showModal,
		});
	}

	render() {
		return (
			<div className='App'>
				{/* skiplink */}
				<a href='#shop' class='skip-link'>
					Skip to Main Content
				</a>
				<Nav toggleList={this.wishlistToggle} />
				<header id='home'>
					<div className='flex-container wrapper'>
						<Header />

						<ToggleDisplay show={this.state.showWishlist}>
							<section className='wishlist'>
								<div className='wishlist-header'>
									<h2>Wishlist</h2>

									<ul>
										{/* map through wishlist array and pass info into wishlist component to be displayed */}
										{this.state.wishlist.map((listItem) => {
											return (
												<Wishlist
													key={listItem.key}
													name={listItem.item.title}
													src={listItem.item.src}
													alt={listItem.item.alt}
													removeItem={() => {
														this.removeItem(listItem.key);
													}}
													itemKey={listItem.key}
													trash={faTrash}
												/>
											);
										})}
									</ul>

									<button
										className='exit-button icon-button'
										onClick={this.wishlistToggle}
									>
										<p className='sr-only'>
											Close the wishlist by clicking the "X", here.
										</p>
										<FontAwesomeIcon icon='times' />
									</button>
								</div>
							</section>
						</ToggleDisplay>
					</div>
				</header>
				<main className='items' id='shop'>
					<section className='wrapper'>
						{/* display modal when a user tries to add a wishlist item that had already been added */}
						<ToggleDisplay show={this.state.showModal}>
							<div className='modal'>
								<div className='modal-content'>
									<h3>wow!</h3>
									<p>
										looks like you 
										<span>
											<em> really </em>
										</span>
										like that one, it's already in your wishlist!
									</p>
									<button
										className='close-modal icon-button'
										onClick={this.displayModal}
									>
										<p className='sr-only'>
											Close this alert by clicking the "X", here.
										</p>
										<FontAwesomeIcon icon='times' />
									</button>
								</div>
							</div>
						</ToggleDisplay>

						<h2>Meet the Doodles</h2>
						<p>Digital wallpapers drawn by hand + shot on 35mm film</p>

						<ul>
							{/* map over wallpaper array and pass info into item component */}
							{this.state.wallpapers.map((wallpaper) => {
								// filter through wishlist array and compare to wallpaper arrary return the items that are in both arrays
								//pass those items into the item component
								const isStickered = this.state.wishlist.filter((item) => {
									return item.item.title === wallpaper.item.title;
								});

								return (
									<Item
										key={wallpaper.key}
										src={wallpaper.item.src}
										alt={wallpaper.item.alt}
										title={wallpaper.item.title}
										addItem={wallpaper}
										itemKey={wallpaper.key}
										addToWishlist={this.addItem}
										showModal={this.displayModal}
										showSticker={isStickered.length > 0}
									/>
								);
							})}
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;



