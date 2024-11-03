import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRated = ({ data }) => {
  console.log(data);

  return (
    <div>
     
      {data.map((item) => (
            <div key={item?.info?.id}>
              <Link to={"/restaurant/" + item?.info?.id}>
                <div className="mx-4">
                  <RestaurantCard resData={item} />
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default TopRated;
