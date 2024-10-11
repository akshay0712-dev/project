import React, { useEffect, useState } from "react";

const E_commerce = () => {
  const [Data, setData] = useState([{}]);
  const [url, seturl] = useState("https://fakestoreapi.com/products");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
        console.log("Categories:", category);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [url]);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:l-20">
        <p className="text-center text-3xl font-bold ">E-commerce</p>
        <div className="md:flex md:flex-row grid grid-cols-2 w-[95vw]mx-auto  md:w-fit justify-end px-4 md:px-8 gap-1 md:gap-8 md:my-4">
          <div
            className="capitalize px-4 py-2 border-2 border-white text-white font-semibold bg-gray-500 rounded-lg cursor-pointer"
            onClick={(e) => {
              seturl("https://fakestoreapi.com/products");
            }}
          >
            All
          </div>
          {category.map((category) => {
            return (
              <div
                key={category}
                className="capitalize px-4 py-2 border-2 border-white text-white font-semibold bg-gray-500 rounded-lg cursor-pointer"
                onClick={(e) => {
                  seturl(
                    "https://fakestoreapi.com/products/category" +
                      `/${category}`
                  );
                }}
              >
                {category}
              </div>
            );
          })}
          <div className="capitalize px-4 py-2 border-2 border-white text-white font-semibold bg-gray-500 rounded-lg cursor-pointer flex flex-row justify-between">
            <span className="bg-gray-500">CART</span><span class="material-symbols-outlined bg-gray-500">shopping_cart</span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[100vw] md:w-[80vw] grid grid-cols-2 md:grid-cols-4 justify-evenly">
        {Data.map((Data) => {
          return (
            <div
              key={Data.description}
              className="card p-4 mx-auto bg-white w-[40vw] md:w-[280px] rounded-xl my-3 border-2 border-black cursor-pointer hover:scale-110"
              title={Data.description}
            >
              <img
                src={Data.image}
                alt=""
                className="h-[37vw] md:h-[250px] w-[37vw] md:w-[250px] rounded-xl "
              />
              <div className="bg-white">
                <div className="flex flex-col mt-3">
                  <span className="bg-white text-black text-center overflow-hidden text-nowrap text-ellipsis ">
                    {Data.title}
                  </span>
                </div>
                <div className="flex flex-row justify-between flex-wrap bg-white md:px-4">
                  <span className="bg-white text-black text-center font-bold">
                    $ {Data.price}
                  </span>
                  <div className="capitalize w-fit px-3 bg-white">
                    <span
                      className="material-symbols-outlined bg-white"
                      title="Add to CART"
                    >
                      shopping_cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default E_commerce;
