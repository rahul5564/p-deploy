import { useContext , useState, useEffect} from "react";
import { CartContext } from "../cartProvider.js/card";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Aisde = () => {
  const STARS = [1, 2, 3, 4, 5];

  const {
    changeHandler,
    sortRadio,
    sortCategory,
    ClearAll,
    handleRangeChange,
    Pricerange
  } = useContext(CartContext);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setSelectedCategories(sortCategory || []);
  }, [sortCategory]);

  const clearAllFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="Side-main">
      <p>
        Filters{" "}
        <span className="clear" onClick={() => [ClearAll(),clearAllFilters()]}>
          <span className="clr-flt-btn">Clear</span>
        </span>
      </p>
      <div className="sidebar-content">
      <div className="Price-Range">
      <h4>Price</h4>
        <div className="flex-gap">
          <div className="price-range">
            <p>1000</p>
            <p>5000</p>
            <p>10000</p>
          </div>
          <input
            type="range"
            name="rangeInput"
            className="slider"
            min="1000"
            max="10000"
            value={Pricerange}
            onChange={(e) => handleRangeChange(e)}
          />
           <p>{Pricerange}</p>
        </div>
      </div>
      <div>
        <h4>Category</h4>
        <input
          type="checkbox"
          value="Luxury"
          onChange={(e) => sortCategory(e.target.value, e.target.checked)}
          checked={selectedCategories && selectedCategories.includes("Luxury")}
        />
        Sport <br />
        <input 
        type="checkbox" 
        value="Sport" 
        onChange={(e) => sortCategory(e.target.value, e.target.checked)}
        checked={selectedCategories && selectedCategories.includes("Sport")}
         />
        Casual <br />
        <input
          type="checkbox"
          value="Casual"
          onChange={(e) => sortCategory(e.target.value, e.target.checked)}
          hecked={selectedCategories && selectedCategories.includes("Casual")}
        />
        Luxury <br />
      </div>
      <div className="filter">
        <h4>Rating</h4>
        <div>
          {STARS.map((star) => (
            <label key={star} className="rating-label">
              <input
                type="radio"
                name="rating"
                key="Category"
                className="rating-input"
                value={star}
                onChange={(e) => changeHandler(e)}
              />
              <span>{star} Stars and Above</span>
              <br />
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4>Sort by</h4>
        <input
          type="radio"
          value="Low"
          name="Sort"
          onClick={(e) => sortRadio(e)}
        />{" "}
        Price - Low to High <br />
        <input
          type="radio"
          value="High"
          name="Sort"
          onClick={(e) => sortRadio(e)}
        />{" "}
        Price - High to Low
        <br />
      </div>
      </div>
    </div>
  );
};
