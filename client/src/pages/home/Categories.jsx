import React from 'react';
import item1 from "../../../public/item1.jpg";
import item2 from "../../../public/item2.jpg";
import item3 from "../../../public/item3.jpg";
import item4 from "../../../public/item4.jpg";

// console.log(item1);
  
const categoryItems = () => [
  { id: 1, title: "Breakfast", des: "(22 dishes)", image: "../../../public/item1.jpg" },
  { id: 2, title: "Main Dishes", des: "(86 dishes)", image: {item2} },
  { id: 3, title: "Dessert", des: "(40 dishes)", image:{item3} },
  { id: 4, title: "Browse All", des: "(289 dishes)", image: {item4} },
];
const Categories = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
        <p className='subtitle'>Customer Favourites</p>
        <h2 className='title'>Popular Categories</h2>
      </div>

      {/* Category Cards */}
      <div>
        {/* {
          categoryItems.map((item, i) => {
            <div>
              item.item1= { item1};
              item.item2= { };
              item.item3= { };
              item.item4= { };
            </div>;
          })
        } */}
      </div>
    </div>
  );
}

export default Categories;
