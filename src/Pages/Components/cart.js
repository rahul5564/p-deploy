import { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";
import { StarHalf } from 'lucide-react';
import "./Content/Content.css";

export const Cart = () => {
  const { CartItem,LikesItem, RemovefromCart, Movetowishlist } = useContext(CartContext);
  console.log(CartItem.length,"cart");
  const [cartprice,setCartprice] = useState(0);

  const Items = CartItem.length;


  const checkLikeIds = LikesItem.map(data => data.id);

  const totalCartPrice = CartItem.reduce((total, item) => {
    return total + parseFloat(item.price.replace(/,/g, ""));
  }, 0);

  const handleIncrement = (price,discountedPrice,id) => {
    console.log(price,discountedPrice,id)
    setCartprice((prevPrice) => prevPrice + parseFloat(price.replace(/,/g, "")));
  };

  const handleDecrement = (price) => {
    setCartprice((prevPrice) => prevPrice - parseFloat(price.replace(/,/g, "")));
  };

  return (
    <div>
      <Navbar />
      <br />
      <div>
      {CartItem.length === 0 ? <h1 className="head-info">No, Items in Cart</h1> : ""}
      <h1 className="head">My Cart ({Items})</h1>
      <div className="cart-container">
      <p>
        {CartItem.map(
          ({
            id,
            Image,
            watch_model,
            rating,
            manufacturer,
            year,
            discount,
            price,
            discountedPrice
          }) => {
            const isInCart = checkLikeIds.includes(id);
            return(
              <>
            <div className="likejs">
              <div className="image-cart">
              <img src={Image} className="Watch cartimg" alt="watch" />
              </div>
              <div className="content-cart">
              <div className="likeCart-content cartp">
              <p className="watch-model">
                  <span className="watch-company">{manufacturer}</span><br/>x
                  <span className="watch-company-model">{watch_model}</span>
              </p>
              <p className="watch-rating">{rating} {}<StarHalf size={15} /> </p>
              <p className="price-discount">
                  $/{discountedPrice} <del>${price}</del> (<span className="discount">{discount} OFF</span>)
                  </p>
              </div>
              <div className="btn-container btns">
              <button className="button" onClick={() => RemovefromCart({ id })}>
                Remove
              </button>
              </div>
              {isInCart ? 
              <div className="btn-container btns-1">
              <button
              className="button btns-1"
              >
              This Product exits in WishList
              </button>
              </div> 
              : 
              <div className="btn-container ">
              <button
                className="button btns-1"
                onClick={() =>
                  Movetowishlist({
                    id,
                    Image,
                    watch_model,
                    rating,
                    manufacturer,
                    year,
                    discount,
                    price,
                    discountedPrice
                  })
                }
              >
                Move to wishlist
              </button>
              </div>
          }
          <div className="btns-mini">
          <button className="btn-carts" onClick={() => handleIncrement(price,id,discountedPrice)}>+</button> 
          <span>{id}</span>
          <button className="btn-carts" onClick={() => handleDecrement(price,id,discountedPrice)}>-</button>
          </div>
          </div>
            </div>
            </>
          )}
        )}
      </p>
      {CartItem.length === 0 ? "" :
      <div className="likejs-2">
        <div className="coupon"> 
        <span>Have a Coupon? </span>
        <span><b>Apply</b></span>
        </div>
        <div>
        <hr/>
        <h2 className="price-details">PRICE DETAILS</h2>
        <hr/>
        </div>
        <div className="cart-Items">
        <span className="cart-Items-left">Price {}Items</span>
        <span className="cart-Items-right">{totalCartPrice}</span>
        </div>
        <div className="cart-Items">
        <span className="cart-Items-left">Discount</span>
        <span className="cart-Items-right">{cartprice}</span>
        </div>
        <div className="cart-Items">
        <span className="cart-Items-left">Delivery Charges</span>
        <span className="cart-Items-right">Free </span>
        </div>
        <div className="cart-Items">
        <span className="cart-Items-left">Coupon Discount</span>
        <span className="cart-Items-right">0 </span>
        </div>
        {/* <span>{cartprice}</span> */}
  

        {/* <h3><b>Total Amount</b></h3>
        <p>
          You will save {} on this order
        </p> */}
      </div>}
      </div>
      </div>
    </div>
  );
};
