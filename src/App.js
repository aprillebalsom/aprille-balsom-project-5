import React from 'react';
import firebase from "./firebase";
import Nav from "./Nav.js";
// import flora from './assets/flora.png';
import Wishlist from './Wishlist.js';
import Footer from './Footer.js';


import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      wallpapers: [],
      wishlist: [],
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

  render() {
    return (
      <div className="App">
        <header>
          {/* <div className=""> */}
          <Nav />
          <div className="flex-container wrapper">
            <section className="header-text">
              <h1>
                <span className="sunday">Sunday</span>
                <span className="homework">Homework</span>
              </h1>
              <p className="tagline">created on a lazy sunday morning, with coffee in hand</p>
            </section>
            <section className="wishlist">
              {/* <h2>Wishlist</h2> */}

              <ul>
                {this.state.wishlist.map((listItem) => {
                  return (
                    // <div className="wishlist-item">
                    <Wishlist
                      name={listItem.item.title}
                      imageSrc={listItem.item.src}
                      imageAlt={listItem.item.alt}
                      removeItem={() => {
                        this.removeItem(listItem.key);
                      }}
                      key={listItem.key}
                    />

                    // </div>
                  );
                })}
              </ul>
            </section>
            {/* </div> */}
          </div>
        </header>

        {/* main content - items */}
        <div className="items wrapper">
          <h2>Meet the Doodles</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            molestias.
          </p>

          <ul>
            {this.state.wallpapers.map((wallpaper) => {
              return (
                <li key={wallpaper.key}>
                  <div className="item">
                    {/* TODO get images to load */}
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

        {/* import of footer */}
        <Footer />
      </div>
    );
  }
}

export default App;



