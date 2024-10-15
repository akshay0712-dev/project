import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDo() {
  const today = new Date().toISOString().split("T")[0];
  const [Datee, setDatee] = useState(today);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [id, setid] = useState(0);
  const [toggleList, setToggleList] = useState(0);
  const [categories, setCategories] = useState({
    work: [1],
    personal: [2],
    study: [3],
    shopping: [4, 6],
    other: [5],
  });
  // console.log(Object.keys(categories));

  const [itemCat, setItemCat] = useState("");

  console.log(categories[itemCat]);
  useEffect(() => {
    const todoString = localStorage.getItem("todos");

    if (todoString) {
      try {
        const todos = JSON.parse(todoString);
        setTodos(Array.isArray(todos) ? todos : []);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // Request permission for notifications
  useEffect(() => {
    if ("Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
          console.log("Notification permission:", permission);
        });
      }
    }
  }, []);

  // Function to show notification
  const showNotification = (message) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(message);
    }
  };

  const toggleCatList = () => {
    toggleList ? setToggleList(0) : setToggleList(1);
  };

  const handleAdd = () => {
    if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, todo } : item
      );
      setTodos(updatedTodos);
      setTodo("");
      setItemCat("");
      setDatee(today);
      setEditId(null);
      showNotification("Todo Edited successfully!"); // Notification for update
    } else {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          index: id,
          todo,
          cat: itemCat,
          Date: Datee,
          isCompleted: false,
        },
      ]);
      setid(id + 1);
      setTodo("");
      setItemCat("");

      addItemToShopping();
      setDatee(today);
      showNotification(todo + " Added Successfully!");
    }
  };

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const itemToEdit = todos.find((item) => item.id === id);
    setTodo(itemToEdit.todo);
    setItemCat(itemToEdit.cat);
    setDatee(itemToEdit.Date);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-white w-[95vw] md:w-[85vw] min-h-[80vh]">
        {/* <h2 className="text-lg font-bold my-5">Add a Todo</h2> */}
        <div className="addTodos md:grid md:grid-cols-[50vw_30vw] flex flex-col gap-3 md:gap-8  bg-white">
          <div className="bg-white">
            <input
              type="text"
              onChange={handleChange}
              onKeyPress={handleKeyDown}
              value={todo}
              className="rounded-md px-3 bg-white border-2 border-[#66656548] w-full py-2"
              placeholder="Enter Todos Here"
            />
          </div>
          <div className="bg-white flex flex-row gap-3 ">
            <div className="bg-white flex items-center relative">
              <div
                className={`flex items-center bg-white border-2 border-[#66656548] w-full capitalize rounded-md px-3 py-2 ${
                  itemCat == "" ? "text-[#888383d6]" : "text-black"
                }`}
                onClick={() => toggleCatList()}
              >
                {itemCat == "" ? "Category" : itemCat}
              </div>
              <div
                className={`flex flex-col absolute top-[104%] bg-[#ffffff] px-3 py-2 rounded-md gap-2  ${
                  toggleList ? "block" : "hidden"
                }`}
              >
                {Object.keys(categories).map((catList) => {
                  return (
                    <div
                      key={catList}
                      className={`capitalize text-center bg-[#0000000e] font-medium px-3 py-2 rounded-md z-10 cursor-pointer hover:font-bold`}
                      onClick={() => {
                        setItemCat(catList);
                        toggleCatList();
                      }}
                    >
                      {catList}
                    </div>
                  );
                })}
              </div>
            </div>
            <input
              type="date"
              value={Datee}
              onChange={(e) => setDatee(e.target.value)}
              className="bg-white border-2 border-[#66656548] w-full rounded-md px-3 py-2"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-violet-800 hover:bg-violet-950 py-2 px-8 rounded-md text-sm font-bold cursor-pointer text-white disabled:bg-violet-900 "
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold my-5 bg-white text-center ">
          Your Todos
        </h2>
        <div className="todos bg-white">
          {todos.length === 0 && (
            <div className="text-center text-xl font-semibold font-mono capitalize bg-white">
              Add Todo to see....
            </div>
          )}
          <div className="bg-white flex flex-row flex-wrap justify-end gap-2">
            {todos.length != 0 &&
              Object.keys(categories).map((filters) => {
                return (
                  <div
                    key={filters}
                    className="capitalize text-center bg-violet-900 w-[100px] py-1 px-3 rounded-md cursor-pointer text-white"
                  >
                    {filters}
                  </div>
                );
              })}
          </div>
          {todos.map((item) => (
            <div
              key={item.id}
              className="todo grid grid-cols-[5%_55%_20%_20%] md:grid-cols-[5%_75%_10%_10%] my-5 pb-8 border-b-[0.5px] border-[rgba(45,45,45,0.22)] items-center justify-center bg-white"
            >
              <div
                onClick={() => handleCheckbox(item.id)}
                type="checkbox"
                checked={item.isCompleted}
                name={item.id}
                className={`p-2 py-1 rounded-md mx-3  material-symbols-outlined cursor-pointer bg-white ${
                  item.isCompleted
                    ? "text-green-600"
                    : "text-[rgb(233,100,251)] "
                }`}
              >
                {" "}
                {item.isCompleted ? "check_circle" : "pending"}
              </div>
              <div
                className={`capitalize bg-white ${
                  item.isCompleted ? "line-through " : ""
                }`}
              >
                {item.todo}
              </div>
              <button
                onClick={() => handleEdit(item.id)}
                className="h-7 bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md  cursor-pointer text-white mx-3 material-symbols-outlined "
              >
                edit_note
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="h-7 bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md  cursor-pointer text-white mx-3 material-symbols-outlined"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToDo;
