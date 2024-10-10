import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards"
const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default");

    // loading data

    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            try {
                const res = await fetch("/menu.json")
                const data = await res.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);
                
            } catch (error) {
                console.log("Error fetching data", error);
                
            }
        }

        fetchData();
    }, [])

    // filtering data based on category

    const filterItems = (category) => {
        const filtered =
            category === "all"
                ? menu
                : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
    }; 

    // show all data

    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all")
    }

    // sorting based on A-Z, Z-A, Low-High pricing

    const handleSortChange = (option) => {
        setSortOption(option);
        let sortedItems = [...filteredItems];

        // logic

        switch (option) {
          case "A-Z":
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Z-A":
            sortedItems.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case "low-to-high":
            sortedItems.sort((a, b) => a.price - b.price);
            break;
          case "high-to-low":
            sortedItems.sort((a, b) => b.price - a.price);
            break;
            default:
                break;
        }

        setFilteredItems(sortedItems);
    }

    return (
      <div>
        {/* Menu Banner  */}
        <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
          <div className="pt-[110px] pb-20 flex flex-col  justify-center items-center gap-8">
            {/* text */}
            <div className="text-center space-y-7 px-4">
              <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
                Indulge in a curated selection of flavors at
                <span className="text-orange"> FoodMood</span>
              </h2>
              <p className="text-md text-[#4A4A4A] ">
                When you browse our menu, you're not just looking at a list of
                dishes; you're exploring a world of flavors. FoodMood offers a
                diverse selection of options, each one crafted with passion and
                care.
              </p>
              <button className="btn bg-orange px-10 py-1 font-bold text-white rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* menu selection section */}
        <div className="section-container">
          {/* filtering and sorting */}

          <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-6">
            {/* all category button */}
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                className={selectedCategory === "salad" ? "active" : ""}
                onClick={() => filterItems("salad")}
              >
                Salad
              </button>
              <button
                className={selectedCategory === "pizza" ? "active" : ""}
                onClick={() => filterItems("pizza")}
              >
                Pizza
              </button>
              <button
                className={selectedCategory === "soup" ? "active" : ""}
                onClick={() => filterItems("soup")}
              >
                Soup
              </button>
              <button
                className={selectedCategory === "dessert" ? "active" : ""}
                onClick={() => filterItems("dessert")}
              >
                Desserts
              </button>
              <button
                className={selectedCategory === "drinks" ? "active" : ""}
                onClick={() => filterItems("drinks")}
              >
                Drinks
              </button>
            </div>

            {/* sorting base filtering */}

            <div className="flex  justify-end mb-4 rounded-sm">
              <div className="bg-black p-2">
                <FaFilter className="h-4 w-4 text-white" />
              </div>

              {/* sorting options */}
              <select
                name="sort"
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black text-white px-2 py-1 rounded-sm "
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          {/* products card */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {filteredItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Menu;
