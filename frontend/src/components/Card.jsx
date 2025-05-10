import React, { useState } from "react";
import CartService from "../services/cart.service";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
// import Product from "../pages/Home/Product";

const Card = ({ item }) => {
  const { _id, name, image, price, description, category } = item;
  const {user} = useContext(AuthContext);
  const [refetch] = useCart();
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
const handleAddToCart = async () =>{
    if(!user || !email){
      Swal.fire({
        icon:"error",
        title:"Oops...",
        text: "Please login to add to cart",
      });
      return;
    }
    try{
      const cartItem = {
        productId:_id,
        email:user.email,
        quantity:1,
        name,
        price,
        image,
      };
      const response = await CartService.createCart(cartItem);
      if(response.status===200){
        Swal.fire({
          icon:"success",
          title:"Success",
          text: "Item added to cart",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    }catch (error){
      Swal.fire({
        icon:"error",
        title:"Oops...",
        text: error.message,
      });
      return;
    }
  }
  return (
    <div className="card shadow-xl relative mr-5 md:my-5 h-120">
      <div
        className="rating gap-1 absolute right-2 top-2 p-4 heartStar z-40 bg-red rounded-md"
        onClick={handleHeartClick}
      >
        <input
          type="radio"
          name="rating-3"
          className={`mask mask-heart ${isHeartFilled ? "bg-white" : ""
            } hover:bg-white transition-all delay-100`}
        />
      </div>
      <figure>
        <img
          src={image}
          alt={name}
          className="hover:scale-105 transition-all duration-300 md:h-60 md:w-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{name}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="card-action flex justify-between items-center mt-2">
          <h5 className="font-semibold">
            {price} <span className="text-sm text-red">฿</span>
          </h5>
          <button className="btn bg-red rounded-md text-white " 
          onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;