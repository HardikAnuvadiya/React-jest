import React, { useEffect, useState } from "react";
import "../components/Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [lists, setLists] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {}, [lists]);
  const handleAdd = () => {
    if (inputData === "") {
      return;
    } else {
      setLists((prevLists) => [...prevLists, inputData]);
      setInputData("");
    }
  };

  const handleDelete = (i) => {
    const updatedList = lists.filter((elem, index) => {
      return index != i;
    });
    setLists(updatedList);
  };
  const handleEdit = (ind) => {
    const newData = lists.find((elem, i) => {
      return i === ind;
    });
    setInputData(newData);
    setToggle(true);
    setIsEdit(ind);
  };
  const handleUpdate = () => {
    setLists(
      lists.map((item, index) => {
        if (index === isEdit) {
          return inputData;
        }
        return item;
      })
    );
    setToggle(false);
    setInputData("");
    setIsEdit(null);
  };
  return (
    <div>
      <p className="text-center">Add List </p>
      <div className="div-text">
        <input
          type="text"
          placeholder="Enter List"
          value={inputData}
          onChange={handleChange}
          data-testid="input"
        />
        {!toggle ? (
          <button
            onClick={handleAdd}
            type="button"
            className="add_btn"
            data-testid="add-button"
          >
            Add
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            type="button"
            className="add_btn"
            data-testid="update-button"
          >
            update
          </button>
        )}
      </div>
      {lists && lists.length > 0 ? (
        <div className="text-center">
          <div className="list" data-testid={`list`}>
            {lists &&
              lists.length > 0 &&
              lists.map((list, index) => {
                return (
                  <div className="span-text" key={index}>
                    <span>{list}</span>
                    <div>
                      <button
                        type="button"
                        className=" btn btn_edit"
                        onClick={() => handleEdit(index)}
                        data-testid="edit-button"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className=" btn btn_delete"
                        onClick={() => handleDelete(index)}
                        data-testid={`delete-btn-${index}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="text-center">No data Found!!!!</div>
      )}
    </div>
  );
};

export default Todo;
