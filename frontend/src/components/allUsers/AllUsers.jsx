import React, { useState, useEffect } from "react";
import NavBar from "../navBar/NavBar";
import "./AllUsers.css";
import axios from "axios";

function AllUsers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile")
      .then((response) => setUsers(response.data))
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="allUsers">
        <ul>
          {users &&
            users.map((el) => {
              return <li>{el.user.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default AllUsers;
