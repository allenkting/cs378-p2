import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
// import { clear } from '@testing-library/user-event/dist/clear';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const headerInfo = [
  {
    id:1,
    title: "DRAGON CAFE",
    sub1: "Delicious, From-Scratch Recipes Close at Hand",
    sub2: "The Fresh Choice of UT!"
  }
]


function App() {
  // State for individual item counts
  const [itemCounts, setItemCounts] = useState({});
  const incrementItemCount = (id) => {
    let temp = {}
    Object.assign(temp, itemCounts)
    if (temp[id]) {
      temp[id] = temp[id] + 1
    } else {
      temp[id] = 1
    }
    setItemCounts(temp)
  }
  const decrementItemCount = (id) => {
    let temp = {}
    Object.assign(temp, itemCounts)
    if (temp[id] > 0) {
        temp[id] = temp[id] - 1
    }
    setItemCounts(temp)
  }
  const clearCount = (itemCounts) => {
    let temp = {}
    Object.assign(temp, itemCounts)
    for (const [k,] of Object.entries(temp)) {
      temp[k] = 0
    }
    setItemCounts(temp)
  }
  const showAll = (itemCounts) => {
    let temp = {}
    Object.assign(temp, itemCounts)
    let totalItems = 0

    let str = ""
    for (const [k,v] of Object.entries(temp)) {
      let name = menuItems[k-1].title
      totalItems += v
      if (v > 0) {
        let num = v.toString()
        str += num + " " + name + "\n"
      }
    }
    if (totalItems > 0) {
      alert(str)
    } else {
      alert("No items in cart")
    }
    setTotalPrice(0)
    clearCount(itemCounts)
  }

  // State for total price
  const [totalPrice, setTotalPrice] = useState(0); 
  const incrementPrice = (price) => {
    setTotalPrice(totalPrice + price)
  }
  const decrementPrice = (price) => {
    setTotalPrice(totalPrice - price)
  }


  return (
    <div class="container">
      
      <Header
        title={headerInfo[0].title}
        sub1={headerInfo[0].sub1}
        sub2={headerInfo[0].sub2}
      />

      <div class="row align-items-center menu">
        {menuItems.map((item) => (
          <MenuItem id = {item.id} title={item.title} 
          desc={item.description} imageName={item.imageName}
          price={item.price} count={itemCounts[item.id] || 0}
          incrementItemCount={incrementItemCount}
          decrementItemCount={decrementItemCount}
          incrementPrice={incrementPrice}
          decrementPrice={decrementPrice}/>
        ))}
      </div>
      
      <div class="row align-items-start justify-content-center cart">
        <div class="col text-center">
          Subtotal: ${Math.abs(totalPrice).toFixed(2)}
        </div>
        <div class="col text-center">
          <button type="button" class="but2" onClick={() => {
            showAll(itemCounts)
          }}>
            Order
          </button>
        </div>
        <div class="col text-center" >
          <button type="button" class="but2" onClick={() => {
            setTotalPrice(0)
            clearCount(itemCounts)
          }}>
            Clear All
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
