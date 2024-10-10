import React from 'react';
import Chef from "../../../public/banner2.png"
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img className="w-[350px]" src={Chef} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say about Us</h2>
            <blockquote className="my-5 text-secondary leading-[26px]">
              "I've tried several food delivery apps, but FoodMood is definitely
              my favorite. The selection of restaurants is amazing, and the food
              is always fresh and delicious. Plus, the customer service is
              top-notch." - Tulon
            </blockquote>

            {/* Avatar */}
            <div className='flex items-center gap-4 flex-wrap'>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>

            <div className='space-y-1'>
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className='flex items-center gap-2'>
                <FaStar className="text-yellow-400" />
                <span className="font-medium">4.9</span>
                <span className="text-[#807E7E]">(18.6k Reviews)</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
