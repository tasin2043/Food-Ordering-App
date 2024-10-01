import React from 'react';
import banner from "../../public/banner.png"
import food1 from "../../public/food1.jpg";
import food2 from "../../public/food2.jpg";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* image */}
        <div className="md:w-1/2">
          <div className="">
            <img src={banner} alt="" className="rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-60">
              <img src={food1} alt="" className="rounded-2xl w-20 h-15" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Masalla Kacchi</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                </div>
                <p className="text-red"> ৳299</p>
              </div>
            </div>

            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-60">
              <img src={food2} alt="" className="rounded-2xl w-20 h-15" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Masalla Kacchi</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange"
                  />
                </div>
                <p className="text-red"> ৳299</p>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Taste your Town with a <span className="text-orange">FoodMood</span>{" "}
            Weather
          </h2>
          <p className="text-xl text-[#4A4A4A] ">
            where you can find delicious food tailored to your mood
          </p>
          <button className="btn bg-orange px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
