import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const NotesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const propertyData = JSON.parse(localStorage.getItem("properties"));
  const property = propertyData?.propertiesDetails?.find((data) => {
    return data.id === parseInt(id);
  });

  return (
    <>
      <div>
        <h1>Property page</h1>
        <div
          data-testid={`property-details${property?.id}`}
          className="main-data"
          onClick={() =>
            navigate(`/property/${id}/tasks`, {
              state: property,
            })
          }
        >
          <span className="detail d-block">Id -{property?.id}</span>
          <span className="sub-detail d-block">
            Country -{property?.country}
          </span>
          <span className="sub-detail d-block">Task -{property?.task}</span>
        </div>
      </div>
    </>
  );
};

export default NotesDetails;
