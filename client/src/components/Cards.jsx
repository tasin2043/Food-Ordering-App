import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { IoIosHeart } from "react-icons/io";

const Cards = ({ item }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    }
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-xl relative mr-5 md:my-5"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 mask-heart bg-orange ${
          isHeartFilled ? "text-black-900" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <IoIosHeart className="w-5 h-5 rotate-[90deg] mt-2 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 transition-all duration-300 md:h-[200px] h-[200px]"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}!</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">৳ </span> {item.price}
          </h5>
          <button className="btn bg-orange text-white">Add to Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
