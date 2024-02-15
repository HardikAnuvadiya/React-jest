import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Task = () => {
  const data = useLocation();
  const [details, setDetails] = useState(data.state);
  const navigate = useNavigate();

  const updateDetails = () => {
    setDetails({
      ...details,
      country: details.country + new Date().getTime(),
    });
    const items = JSON.parse(localStorage.getItem("properties"));
    const newItems = items.propertiesDetails?.map((itm) => {
      if (itm.id === details.id) {
        return { ...details, country: details.country + new Date().getTime() };
      }
      return itm;
    });
    localStorage.setItem(
      "properties",
      JSON.stringify({ propertiesDetails: newItems })
    );
  };

  return (
    <>
      <h1>Task Page</h1>
      <div className="main-data mb-2">
        <span className="detail d-block">Id -{details.id}</span>
        <span className="sub-detail d-block">Country -{details.country}</span>
        <span className="sub-detail d-block">Task -{details.task}</span>
      </div>
      <div className="d-flex ">
        <button className="back-btn btn" onClick={updateDetails} type="button">
          Edit
        </button>
        <button
          onClick={() => navigate("/")}
          className="back-btn btn"
          type="button"
        >
          Back To Dashboard
        </button>
      </div>
    </>
  );
};

export default Task;
