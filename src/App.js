import React from 'react';
import firebase from "./firebase";
// import flora from './assets/flora.png';
import Wishlist from './Wishlist.js'
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
        toSetState.push(
          data[key]
        );
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

   const dbRef = firebase.database().ref("wishlistItems");
   dbRef.child(itemToBeRemoved).remove();

 
    const oldWishlist = [...this.state.wishlist];
    const updateWishlist = oldWishlist.filter((_, index) => {
      
      return itemToBeRemoved !== index;
    });

    
    this.setState({
      wishlist: updateWishlist,
    });
  };

  render() {
    return (
      <div className="App">
        
        {/* start of header */}
        <header>
          <h1>
            <span className="sunday">sunday</span>
            <span className="homework">homework</span>
          </h1>

          <div className="wishlist">
            <div className="item">
              <ul>
                {this.state.wishlist.map((listItem) => {
                  return (
                    <div>
                      <Wishlist
                        name={listItem.item.title}
                        imageSrc={listItem.item.src}
                        imageAlt={listItem.item.alt}
                        removeItem={() => {
                          this.removeItem(listItem);
                        }}
                        key={listItem.key}
                      />

                      {/* {console.log(this.state.wishlist)} */}
                    </div>
                  );
                })}

                
              </ul>
            </div>
          </div>
        </header>
        
        {/* main content - items */}
        <div className="items">
          <h2>meet the doodles</h2>

          <ul>
            {this.state.wallpapers.map((wallpaper) => {
              return (
                <li key={(wallpaper.key)}>
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



