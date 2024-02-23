import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import dragonfruit from "../images/dragonfruit.png"
// import gyoza from "../images/gyoza.png"
// import katsu_curry from "../images/katsu-curry.png"
// import matcha_cake from "../images/matcha-cake.png"
// import mochi from "../images/mochi.png"
// import okonomiyaki from "../images/okonomiyaki.png"
// import ramen from "../images/ramen.png"
// import sashimi from "../images/sashimi.png"
// import sushi from "../images/sushi.png"
// import takoyaki from "../images/takoyaki.png"
// import yakitori from "../images/yakitori.png"


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({id, title, desc, imageName, price, count,
    incrementItemCount, decrementItemCount,
    incrementPrice, decrementPrice}) => {

    let imageSrc = "../images/" + imageName;
    let priceStr = "$" + price;
    // const [count, setCount] = useState(0); 

    return (
        <div class="row align-items-center menu-item">
          <div class="col-3 item-img">
            <img src={imageSrc} class="img itimg" alt={desc}/>
          </div>
          <div class="col text-center align-text-bottom item-info">
            <div class="row align-items-center item-name">
              <div class="col text-start">
                {title}
              </div>
            </div>
            <div class="row align-items-center item-desc">
              <div class="col text-start">
                {desc}
              </div>
            </div>
            <div class="row align-items-center item-price">
              <div class="col text-start">
                {priceStr}
              </div>
              <div class="col">
              </div>
              <div class="col">
                <div class="row align-items-center item-price">
                  <button type="button" class="but" onClick={() => {
                    incrementItemCount(id)
                    incrementPrice(price)
                  }}>
                    +
                  </button>
                  <button type="button" class="but" onClick={() => {
                    if (count > 0) {
                      decrementItemCount(id)
                      decrementPrice(price)
                    }
                  }}>
                    -
                  </button>
                  <p>
                    {count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default MenuItem;
