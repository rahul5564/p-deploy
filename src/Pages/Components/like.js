import "./Content/Content.css"
import { Navbar } from "./Navbar/Navbar";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";
import { StarHalf } from 'lucide-react';

export const Like = () => {
  const { LikesItem, RemovefromLike, MovetoCart,CartItem} = useContext(CartContext);
  console.log(LikesItem.length);

  const Items = LikesItem.length;

  const checkCartIds = CartItem.map(data => data.id);

  return (
    <div>
      <Navbar />
      <br />
      <h1 className="head">My WishList ({Items})</h1>
      <p className="card-container">
        {LikesItem.length === 0 ? <h1 className="head-info">No, Items in WishList</h1> : ""}
        {LikesItem.map(
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
            const isInCart = checkCartIds.includes(id);
          return (
            <div className="card-likeCart">
              <img src={Image} className="Watch" alt="watch" />
              <div className="likeCart-content">
              <p className="watch-model">
                  <span className="watch-company">{manufacturer}</span><br/>x
                  <span className="watch-company-model">{watch_model}</span>
              </p>
              <p className="watch-rating">{rating} {}<StarHalf size={15} /> </p>
              <p className="price-discount">
                  $/{discountedPrice} <del>${price}</del> (<span className="discount">{discount} OFF</span>)
                  </p>
              </div>
              <div className="btn-container">
              <button className="button" onClick={() => RemovefromLike({ id })}>
                Remove
              </button>
              </div>
              <div>
              {isInCart ? 
              <div className="btn-container">
                <button
                className="button"
                >
                This Product exits in Cart
                </button>
                </div> 
              : 
              <div className="btn-container">
                <button
                className="button"
                onClick={() =>
                  MovetoCart({
                    id,
                    Image,
                    watch_model,
                    rating,
                    manufacturer,
                    year,
                    discount,
                    price
                  })
                }
              >
                Move to Cart
              </button>
              </div>
              }
              </div>
            </div>
          )
}
        )}

      </p>
      <div>
  </div>
    </div>
  );
};
