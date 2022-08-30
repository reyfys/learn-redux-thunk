import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import TYPES from "../Redux/types";
import { getData } from "../Redux/actions/dataAction";

const Homepage = () => {
  const { dataUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {dataUser.data.map((item) => (
        <div>
          <img src={item.avatar} />
          <h1>{item.first_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
