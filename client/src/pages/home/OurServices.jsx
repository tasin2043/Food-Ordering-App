import React from 'react';


const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and presentation",
    image: "/images/services/service1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "He deliver your order promptly to your door",
    image: "/public/images/services/service2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu and order with ease using our online ordering",
    image: "/public/images/services/service3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with FoodMood Gift Cards",
    image: "/public/images/services/service4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Kitchen Journey & Services</h2>
            <p className="my-5 text-secondary leading-[26px]">
              "At FoodMood, we pride ourselves on providing exceptional
              hospitality. From the moment you browse our menu to the delivery
              of your order, our team is dedicated to ensuring a delightful
              dining experience."
            </p>

            <button className="btn bg-orange rounded-full text-white px-8 py-3">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-md py-3 px-2 text-center space-y-1 text-orange cursor-pointer hover:border-indigo-800 transition-all duration-200 hover:border"
              >
                <img
                  src={service.image}
                  alt=""
                  className="mx-auto w-[65px] h-[65px]"
                />
                <h5 className="pt-2 font-bold">{service.title}</h5>
                <p className="text-[#000a] text-[14px]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
