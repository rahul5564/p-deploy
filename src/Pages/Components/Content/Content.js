import { useContext } from "react";
import { CartContext } from "../../cartProvider.js/card";
import { StarHalf } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { Sidebarcontent } from "../../sidebar/sidebarContent";
import { Link } from "react-router-dom";
export const Content = ({ Data }) => {
  const { addCart, addLike, filters ,Login} = useContext(CartContext);
  const filtersLength = Object.values(filters).length;

  return (
    <div>
      <p>
        {filtersLength !== 0 ? (
          <div>
            <Sidebarcontent />
          </div>
        ) : (
          <div>
            {Data.watches.map(
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
              }) => (
                <div className="card">
                  <img src={Image} className="Watch" alt="watch" />
                  <div className="watch-container">
                  <p className="watch-model">
                  <span className="watch-company">{manufacturer}</span><br/>
                  <span className="watch-company-model">{watch_model}</span>
                  </p>
                  <p className="watch-rating">{rating} {}<StarHalf size={15} /> </p>
                  </div>
                  <p className="price-discount">
                  $/{discountedPrice} <del>${price}</del> (<span className="discount">{discount} OFF</span>)
                  </p>
                  <div className="parent-btn">
                  <button
                    className="button"
                    onClick={() => {
                      if(Login){
                        addLike({
                              id,
                              Image,
                              watch_model,
                              rating,
                              manufacturer,
                              year,
                              discount,
                              price
                          })
                      }else{
                        window.location.href = '/Login';
                      }
                    }
                  }
                  >
                    <span className="Like">Like 👍🏼 </span>
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      if(Login){
                        addCart({
                        id,
                        Image,
                        watch_model,
                        rating,
                        manufacturer,
                        year,
                        discount,
                        price
                      })
                      }else{
                        window.location.href = '/Login';
                      }
                    }
                  }
                  >
                    <span className="Like"> Add To Cart 🛒</span>
                  </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </p>
    </div>
  );
};
