import React from 'react';


  
const categoryItems = [
  {
    id: 1,
    title: "Breakfast",
    des: "(22 dishes)",
    image: "../../../public/item1.jpg",
  },
  {
    id: 2,
    title: "Main Dishes",
    des: "(86 dishes)",
    image: "../../../public/item2.jpg",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(40 dishes)",
    image: "../../../public/item3.jpg",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(289 dishes)",
    image: "../../../public/item4.jpg",
  },
];
const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col sm:flex-row justify-around flex-wrap items-center gap-8 mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className=" shadow-lg rounded-3xl bg-white py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex justify-center items-center w-full mx-auto">
              <img
                src={item.image}
                alt=""
                className="w-[200px] h-[150px] rounded-full bg-[#ffa375] p-5"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
