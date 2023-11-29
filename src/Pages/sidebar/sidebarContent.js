import "../Components/Content/Content.css"
import { useContext, useState } from "react";
import { CartContext } from "../cartProvider.js/card";
import { Data } from "../../Data/db";
import { StarHalf } from 'lucide-react';

export const Sidebarcontent = () => {
  const { Sort,filters ,addCart, addLike} = useContext(CartContext);

  const SortRating = Data.watches.filter((data) => {
    const meetsStarsCriteria = !filters.Stars || data.rating >= filters.Stars;
    const meetsRangeCriteria = !filters.range || parseFloat(data.price.replace(/,/g, '')) <= parseFloat(filters.range);
    const meetsCategoryCriteria = !filters.category || filters.category.includes(data.category);
    // const SearchBar = data.manufacturer == filters.Name.replace(/,/g, ''); 
    return meetsStarsCriteria && meetsRangeCriteria && meetsCategoryCriteria  ;
  })


  if (Sort[0] === 'Low') {
    SortRating.sort((a, b) => parseFloat(a.price.replace(',', '')) - parseFloat(b.price.replace(',', '')));
      } else if (Sort[0] === 'High') {
    SortRating.sort((a, b) => parseFloat(b.price.replace(',', '')) - parseFloat(a.price.replace(',', '')));
  }

  return (
    <div>
      <div>
        {SortRating.length === 0 ? <h1 className="head">Ouch! Products are not available for chosen category.</h1> : ""}
        {SortRating.map(
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
                  <span className="watch-company">{manufacturer}</span><br/>x
                  <span className="watch-company-model">{watch_model}</span>
                  </p>
                  <p className="watch-rating">{rating} {}<StarHalf size={15} /> </p>
                  </div>
                  {/* <p>{year}</p> */}
                  <p className="price-discount">
                  $/{discountedPrice} <del>${price}</del> (<span className="discount">{discount} OFF</span>)
                  </p>
                  <div className="parent-btn">
                  <button
                    className="button"
                    onClick={() =>
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
                    }
                  >
                    <span className="Like">Like 👍🏼 </span>
                  </button>
                  <button
                    className="button"
                    onClick={() =>
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
                    }
                  >
                    <span className="Like"> Add To Cart 🛒</span>
                  </button>
                  </div>
                </div>
          )
        )}
      </div>
    </div>
  );
};
