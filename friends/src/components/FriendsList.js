import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

// SECTION COMPONENT
const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getData = () => {
      axiosWithAuth()
        .get("/api/friends")
        .then((response) => {
          // console.log(response.data);
          setFriends(...friends, response.data);
        });
    };
    getData();
  }, []);

  console.log("friends", friends);

  return (
    <div>
      <AddFriendForm setFriends={setFriends} />
      <h1>Friends List</h1>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
