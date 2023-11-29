import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const Navigate = useNavigate();
  const [CartItem, setCart] = useState([]);
  const [LikesItem, setLike] = useState([]);
  const [Rating, SetRating] = useState([]);
  const [Sort, Setsort] = useState([]);
  const [Category, SetCategory] = useState([]);
  const [filters, setFilters] = useState({});
  const [Pricerange, setPricerange] = useState();
  const [Login, setLogin] = useState(false);


  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
})


const handleChange = (e) =>{ 
    const {name,value} = e.target;
    setFormData({...formData,
        [name]: value,
    })
}




  const addCart = (ItemsAdded) => {
    const isItemInCart = CartItem.some(item => item.id === ItemsAdded.id);
    if (!isItemInCart) {
      const ItemsinCart = [...CartItem, ItemsAdded];
      setCart(ItemsinCart);
    } else {
      Navigate("/Cart")
    }
  };

  const addLike = (ItemsAdded) => {
    const isItemInLikes = LikesItem.some(item => item.id === ItemsAdded.id);
    if (!isItemInLikes) {
      const ItemsinLikes = [...LikesItem, ItemsAdded];
      setLike(ItemsinLikes);
    } else {
      Navigate("/Like")
    }
  };

  const RemovefromCart = (item) => {
    const Removeincart = CartItem.filter((data) => data.id !== item.id);
    setCart([...Removeincart]);
  };

  const RemovefromLike = (removeItem) => {
    const RemoveinLike = LikesItem.filter((data) => data.id !== removeItem.id);
    setLike([...RemoveinLike]);
  };

  const MovetoCart = (toCart) => {
    const RemoveinLike = LikesItem.filter((data) => data.id !== toCart.id);
    const ItemsinCart = [...CartItem, toCart];
    setCart(ItemsinCart);
    setLike([...RemoveinLike]);
  };

  const Movetowishlist = (toList) => {
    const Removeincart = CartItem.filter((data) => data.id !== toList.id);
    const ItemsinLikes = [...LikesItem, toList];
    setLike(ItemsinLikes);
    setCart([...Removeincart]);
  };

  const changeHandler = (items) => {
    const Stars = [items.target.value];
    SetRating(Stars);
    setFilters(prevFilters => ({...prevFilters,Stars}));
  };

  const sortRadio = (items) => {
    const radio = [items.target.value];
    Setsort(radio);
    setFilters(prevFilters => ({...prevFilters,
      sort: radio
    }));
  };

  const sortCategory = (category, isChecked) => {
    setFilters(prevFilters => {
      if (isChecked) {
        return { ...prevFilters, category: [...(prevFilters.category || []), category]};
      } else {
        const updatedCategory = (prevFilters.category || []).filter(item => item !== category);
        return { ...prevFilters, category: updatedCategory.length > 0 ? updatedCategory : undefined };
      }
    });
  };

  const ClearAll = () => {
    setFilters({})
  };

  const handleRangeChange = (e) => {
    console.log(e.target.value,"eeeeeeeeeeeeee",Pricerange);
    setPricerange(e.target.value);
    setFilters(prevFilters => ({...prevFilters,
      range: e.target.value,
    }));
  };

  const loginInfo = (data) => {
    setLogin(data)
  }

  const Searchbar = (data) => {
    setFilters(prevFilters => ({...prevFilters,
      Name : data.target.value
    }));
    if(data.target.value != ""){
      Navigate("/Main");
    }else{
      // Navigate("/");
    }
  }

  return (
    <CartContext.Provider
      value={{
        CartItem,
        LikesItem,
        addCart,
        addLike,
        RemovefromCart,
        RemovefromLike,
        Movetowishlist,
        MovetoCart,
        changeHandler,
        sortRadio,
        sortCategory,
        filters,
        Category,
        Rating,
        Sort,
        ClearAll,
        handleRangeChange,
        Pricerange,
        handleChange,
        formData,
        Login,
        loginInfo,
        Searchbar
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
