import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";

const Expense = () => {
  const today = new Date().toISOString().split("T")[0];

  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Category, setCategory] = useState("");
  const [Datee, setDatee] = useState(today);
  const [id, setid] = useState(0);
  const [Data, setData] = useState([]);
  const [validData, setValidData] = useState(1);
  const Add_Expenses = () => {
    if (Name.length < 3 || Amount < 2 || Category.length < 0) {
      setValidData(0);
    } else {
      setValidData(1);
      const New_Expenses = { id, Name, Amount, Category, Datee };
      setData((prevData) => {
        const updatedData = [...prevData, New_Expenses];
        // Save updated data to localStorage
        localStorage.setItem("expenses", JSON.stringify(updatedData));
        return updatedData;
      });
      setid(id + 1);
      setName("");
      setAmount("");
      setCategory("");
      setDatee(today);
    }
    console.log(Data);
  };
  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("expenses");
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse the JSON string into an object
      setid(JSON.parse(storedData).length + 1); // Set the next ID
    }
  }, []);
  return (
    <>
      <div className="text-center text-2xl font-bold mt-3">Expanse Tracker</div>

      <div className=" gap-4 w-[85vw] mx-auto grid grid-cols-2 md:grid-cols-4 ">
        <input
          type="text"
          value={Name}
          placeholder="Expense Name"
          onChange={(e) => setName(e.target.value)}
          className="border border-black rounded-md px-4 h-[30px] md:h-[50px]"
        />
        <input
          type="number"
          value={Amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="border border-black rounded-md px-4 h-[30px] md:h-[50px]"
        />
        <input
          type="date"
          value={Datee}
          onChange={(e) => setDatee(e.target.value)}
          className="border border-black rounded-md px-2 h-[30px] md:h-[50px] w-full"
        />
        <div
          className="flex items-center justify-center text-center text-base md:text-xl font-semibold px-4 py-2 bg-blue-500 h-[30px] md:h-[50px]  text-white rounded-md shadow-md hover:bg-blue-600 cursor-pointer"
          onClick={() => Add_Expenses()}
        >
          Add Expenses
        </div>
      </div>
      {validData ? (
        " "
      ) : (
        <div className="text-red-500 text-center">Check Entered Data</div>
      )}
      {Data.length > 0 ? (
        <div className="my-5 rounded-xl overflow-hidden w-fit mx-auto">
          <div className="flex flex-row justify-evenly w-[85vw] bg-slate-800 mx-auto gap-1">
            <div className="bg-slate-800 text-white py-4 text-center w-[40%]">
              Expense Name
            </div>
            <div className="bg-slate-800 text-white py-4 text-center w-[30%] md:w-[20%]">
              Amount
            </div>
            {/* <div className="bg-slate-800 text-white py-4 text-center">Category</div> */}
            <div className="bg-slate-800 text-white py-4 text-center w-[30%] md:w-[20%] hidden md:block">
              Date
            </div>
            <div className="bg-slate-800 text-white py-4 text-center w-[30%] md:w-[20%]"></div>
          </div>

          {Data.map((detail, index) => (
            <div
              key={index}
              className="flex flex-row justify-evenly w-[85vw] bg-slate-700 mx-auto gap-1 border-b border-[#8a8989]"
            >
              <div className="bg-slate-700 text-white py-4 text-center w-[40%]">
                {detail.Name}
              </div>
              <div className="bg-slate-700 text-white py-4 text-center w-[30%] md:w-[20%]">
                ₹ {detail.Amount}
              </div>
              {/* <div className="bg-slate-700 text-white py-4 text-center">
                {detail.Category}
              </div> */}
              <div className="bg-slate-700 text-white py-4 text-center w-[30%] md:w-[20%] hidden md:block">
                {detail.Datee}
              </div>
              <div className="bg-slate-700 text-white py-4 text-center w-[30%] md:w-[20%] flex flex-row items-center justify-evenly gap-3 ">
                <div className="bg-slate-700 flex flex-row gap-2 items-center justify-center ">
                  <span className="bg-slate-700 hidden md:block ">Edit</span>
                  <span class="material-symbols-outlined bg-slate-700">edit</span>
                </div>
                <div className="bg-slate-700 flex flex-row gap-2 items-center justify-center">
                  <span className="bg-slate-700 hidden md:block ">Delete</span>
                  <span class="material-symbols-outlined bg-slate-700 ">delete</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default Expense;
