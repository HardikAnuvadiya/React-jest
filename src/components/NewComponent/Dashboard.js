import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    propertiesDetails: [
      {
        id: 1,
        country: "United States",
        task: 1,
      },
      {
        id: 2,
        country: "Russia",
        task: 2,
      },
      {
        id: 3,
        country: "India",
        task: 3,
      },
    ],
  });

  useEffect(() => {
    const storedData = localStorage.getItem("properties");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      localStorage.setItem("properties", JSON.stringify(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("firstName", "Shivani");
    return () => {
      localStorage.removeItem("firstName");
    };
  }, []);

  const handleDetails = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  useEffect(() => {
    localStorage.getItem("name");
    localStorage.setItem("name", JSON.stringify("shivani"));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="d-flex" data-testid={"list"}>
        {data.propertiesDetails.map((propertiesDetail) => (
          <div
            data-testid="stored-data"
            key={propertiesDetail.id}
            onClick={() => handleDetails(propertiesDetail.id)}
          >
            <div
              className="main-data main__div d-flex"
              data-testid={`property-detail${propertiesDetail.id}`}
            >
              <span className="detail"> id - {propertiesDetail.id}</span>
              <span className="sub-detail">
                {" "}
                country - {propertiesDetail.country}
              </span>
              <span className="sub-detail">
                {" "}
                Task - {propertiesDetail.task}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
