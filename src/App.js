import React from 'react';
import firebase from "./firebase";
// import flora from './assets/flora.png';

import Footer from './Footer.js';

import './App.css';

//PROJECT 5 PSEUDO CODE

// create item (TBD what items these will be) class function component that will display the item including: photo, title and "add to wishlist" button

// the app component's state will change (setState()) when the user clicks the "add to wishlist" button (event)
// the wishlist item the user selected will be stored in firebase thus changing the state 
//when the state is updated, the app will pass the wishlist component an updated list through props 

// create wishlist class component
// an item  will be added to the list when a user clicks the button that changes the app component's state
// the wishlist items will then be updated using props and render onto the page

// create a footer function component that displays the footer info 

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      wallpapers: [],
      wishlist: [],
    };
  }

  componentDidMount() {

    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {

      const toSetState = [];
      const data = response.val();
     

      for (let key in data.wallpapers) {
        toSetState.push(data.wallpapers[key]);
      }

      this.setState({
        wallpapers: toSetState,
      });

    });

    const dbRefWishlist = firebase.database().ref("wishlistItems");

    dbRefWishlist.on("value", (response) => {
      const toSetState = [];
      const data = response.val();

      // console.log(data);

      for (let key in data) {

        toSetState.push(data[key]);
    
      }

      this.setState({
        wishlist: toSetState,
      });
      
    });

    console.log(this.state.wishlist);
  }

  handleAdd = (wishlistItem) => {


    // this.setState({
    //   wishlist: wishlistItem,
    // })

    console.log(this.state.wishlist);
    const dbRef = firebase.database().ref("wishlistItems");
    // const key = wishlistItem;

    // if (key.equalTo(wishlistItem)) {
    //   alert('oh no');
    // } else{
      dbRef.push(wishlistItem);
    //   console.log('yay added')
    // }

   




  }

  // TODO find out why this isn't working
  // if (toSetState.includes(wishlistItem)) {

  //   alert('wow, so much love! this wallpaper has already been added to your wishlist');

  // } else {






  // toS.push(wishlistItem);
  // console.log(toSetState);


  // this.setState({
  //   wishlist: wishlistItem,
  // });




  //  const dbRef = firebase.database().ref("wishlistItems");
  //  dbRef.push(wishlistItem);


  // console.log(this.state.wishlist);

  // if the user clicks on a button twice, notify them that it has already been added


  // };

  render() {

    return (
      <div className="App">
        <header>
          <h1>
            <span className="sunday">sunday</span>
            <span className="homework">homework</span>
          </h1>
        </header>

        <div className="items">

          <h2>meet the doodles</h2>

          <ul>
          
            {this.state.wallpapers.map((wallpaper,index) => {

              return (
                <li key={wallpaper, index}>
                 
                  <div className="item">

                    {/* TODO get images to load */}
                    <img
                      src={wallpaper.src}
                      alt={wallpaper.alt}
                    />

                    <p>{wallpaper.title}</p>

                  </div>

                  <button
                    onClick={() => {
                      this.handleAdd(wallpaper)
                    }}
                  >
                    add to wishlist
                  </button>

               
                </li>

              );

            })}

          </ul>

        </div>

        <div className="wishlist">

          <div className="item">

            {this.state.wishlist.map((listItem, index) => {

              return (
                <li key={listItem, index}>

                  <div className="item">

                   
                    <img
                      src={listItem.src}
                      alt={listItem.alt}
                    />

                    <p>{listItem.title}</p>

                  </div>

                </li>

              );

            })}

          </div>

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;



