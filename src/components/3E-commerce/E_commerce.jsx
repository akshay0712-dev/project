import React, { useEffect, useState } from "react";

const E_commerce = () => {
  const [Data, setData] = useState([{}]);
  const [url, seturl] = useState("https://fakestoreapi.com/products");
  const [category, setCategory] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [toggleCart, setToggleCart] = useState(0);
  const [price, setPrice] = useState(0);

  const addToCart = (id) => {
    const itemExists = cartItem.includes(id);
    if (itemExists) {
      console.log("Item already in cart");
    } else {
      setCartItem([...cartItem, id]);
      setPrice((prevPrice) => prevPrice + Data[id - 1].price);
      console.log("price: " + price);
    }
    console.log(cartItem);
  };


  const removeFromCart = (item) => {
    const updatedCart = cartItem.filter((itemId) => itemId !== item);
    setCartItem(updatedCart);
    setPrice((price - Data[item - 1].price).toFixed(2));

  };

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
      <div className="flex flex-col md:flex-row justify-between md:pl-20">
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
          <div className="capitalize px-4 py-2 border-2 border-white text-white  bg-sky-400 rounded-lg  relative">
            <div
              className="bg-sky-400 flex flex-row justify-between md:gap-3 cursor-pointer font-semibold"
              onClick={(e) => {
                toggleCart == 0 ? setToggleCart(1) : setToggleCart(0);
              }}
            >
              <span className="bg-sky-400">CART</span>
              <span className="material-symbols-outlined bg-sky-400">
                shopping_cart
              </span>
            </div>
            <div
              className={`absolute bg-white border-[1px] border-black rounded-lg p-4 top-[105%] right-0 w-[80vw] md:w-[50vw] ${
                toggleCart ? "block" : "hidden"
              }`}
            >
              {/* cart Items */}
              {cartItem.length == 0 ? (
                <div className="text-black bg-white">Add Items to Cart</div>
              ) : (
                cartItem.map((item) => {
                  return (
                    <div className="flex flex-row items-center bg-white gap-4 py-3 border-b border-black" key={item}> 
                      <img
                        src={Data[item - 1].image}
                        alt=""
                        className="h-[30vw] md:h-[180px] w-[30vw] md:w-[180px] rounded-xl  "
                      />
                      <div className="bg-white flex flex-col justify-evenly ">
                        <span className="bg-white text-black text-left ">
                          {Data[item - 1].title}
                        </span>
                        <div className="bg-white flex flex-row my-1 md:my-3 justify-between items-center">
                          <span className="bg-white text-black text-left text-base md:text-lg">
                            Price: ${Data[item - 1].price}
                          </span>
                          <div
                            className=" flex flex-row items-center gap-4 px-3 py-1 bg-white cursor-pointer rounded-lg border-2 border-[red]"
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            <span className="hidden md:block bg-white  text-red-600 font-semibold">
                              Remove From Cart{" "}
                            </span>
                            <span
                              className="material-symbols-outlined bg-white  text-red-600  "
                              title="Remove from cart"
                            >
                              remove_shopping_cart
                            </span>
                          </div>
                        </div>

                        <span className="bg-white text-[#a2a1a1] text-xs md:text-sm text-left ">
                          {Data[0].description}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
              {price == 0 ? (
                " "
              ) : (
                <div className="bg-white text-black font-bold">Total Amount: ${price}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[100vw] md:w-[80vw] grid grid-cols-2 md:grid-cols-3 justify-evenly">
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
                  <div
                    className="capitalize w-fit px-3 py-1 rounded-lg flex flex-row gap-1 bg-white border-2 border-[green]"
                    onClick={(e) => {
                      addToCart(Data.id);
                    }}
                  >
                    <span className="bg-white text-[green] font-semibold hidden md:block">
                      Add to Cart
                    </span>
                    <span
                      className="material-symbols-outlined bg-white text-[green] "
                      title="Add to CART"
                    >
                      shopping_cart
                    </span>
                  </div>
                </div>
              </div>
            </div>          );
        })}
      </div>
    </>
  );
};

export default E_commerce;
