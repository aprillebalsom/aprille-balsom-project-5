import React from 'react'
import firebase from "./firebase";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faStar,
  faCodeBranch,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

import Nav from "./Nav.js";
// import flora from './assets/flora.png';
import Wishlist from './Wishlist.js';
import Footer from './Footer.js';

library.add(fab, faShoppingCart, faStar, faCodeBranch);


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      wallpapers: [],
      wishlist: [],
      listShown: false,
      
    };
  }

  componentDidMount() {

    //get wallpaper information from database
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      const toSetState = [];
      const data = response.val();

      for (let key in data.wallpapers) {
        toSetState.push({
          item: data.wallpapers[key],
          key: key,
        });
      }

      this.setState({
        wallpapers: toSetState,
      });
    });

    //get wishlist information from database
    const dbRefWishlist = firebase.database().ref("wishlistItems");

    dbRefWishlist.on("value", (response) => {
      const toSetState = [];
      const data = response.val();

      for (let key in data) {

        toSetState.push({
          key: key,
          item:data[key].item,
        });

        console.log(data[key])
      }

      this.setState({
        wishlist: toSetState,
      });
    });

    // console.log(this.state.wishlist);
  }

  //create a function that adds an item to the wishlist, when a user clicks the "add to wishlist" button
  addItem = (wishlistItem) => {
    // console.log(this.state.wishlist);
    const dbRef = firebase.database().ref("wishlistItems");

    dbRef.push(wishlistItem);

    // TODO add if statement, maybe have to use filter?!
  };


  // create a function to remove items from the wishlist + firebase when the user clicks the "garbage can" button
  removeItem = (itemToBeRemoved) => {
    console.log(itemToBeRemoved);

    const dbRef = firebase.database().ref("wishlistItems")
    dbRef.child(itemToBeRemoved).remove();
  };

  // showList = (newListState) => {
  //   const setNewState = newListState;

  //   this.setState({
  //     listShown: setNewState,
  //   })

  //   // console.log(this.state.listShown);
  // }


  // hideList = (closeList) => {

  //  const resetState  = closeList;

  //   this.setState({
  //     listShown: resetState,
  //   })

  //   console.log(this.listShown);

  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <header>
          {/* <div className=""> */}
          {/* <Nav listFunc={this.showList} /> */}

          <div className="flex-container wrapper">
            <section className="header-text">
              <h1>
                <span className="sunday">Sunday</span>
                <span className="homework">Homework</span>
              </h1>
              <p className="tagline">
                created on a lazy sunday morning, with coffee in hand
              </p>
            </section>
            <section className="wishlist">
              <div className="wishlist-header">
                {/* <button
                // onClick={() => this.listFunc(this.showList)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button> */}
                {/* <h2>Wishlist</h2> */}
              </div>

              <ul>
                {this.state.wishlist.map((listItem) => {
                  return (
                    <Wishlist
                      name={listItem.item.title}
                      imageSrc={listItem.item.src}
                      imageAlt={listItem.item.alt}
                      removeItem={() => {
                        this.removeItem(listItem.key);
                      }}
                      key={listItem.key}
                      trash={faTrash}
                    />
                  );
                })}
              </ul>
            </section>
          </div>
        </header>

        <div className="items">
          <div className="wrapper">
            <h2>Meet the Doodles</h2>
            <p>digital wallpapers drawn by hand + shot on 35mm film</p>

            <ul>
              {this.state.wallpapers.map((wallpaper) => {
                return (
                  <li key={wallpaper.key}>
                    <div className="item">
                      <img src={wallpaper.item.src} alt={wallpaper.item.alt} />

                      <p>{wallpaper.item.title}</p>
                    </div>

                    <button
                      onClick={() => {
                        this.addItem(wallpaper);
                      }}
                    >
                      Add to wishlist
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;



