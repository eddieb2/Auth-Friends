import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = (props) => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = (event) => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value
    });
  };

  const submitData = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((response) => {
        console.log("addfriendpost:", response.data);
        props.setFriends(response.data);
      });
  };

  // console.log("newFriend: ", newFriend);

  return (
    <form onSubmit={submitData}>
      <TextField
        type="text"
        label="name"
        name="name"
        variant="outlined"
        value={newFriend.name}
        onChange={handleChanges}
      />
      <TextField
        type="text"
        label="age"
        name="age"
        variant="outlined"
        value={newFriend.age}
        onChange={handleChanges}
      />
      <TextField
        type="text"
        label="email"
        name="email"
        variant="outlined"
        value={newFriend.email}
        onChange={handleChanges}
      />
      <Button
        variant="contained"
        color="default"
        type="submit"
      >
        Add Friend
      </Button>
    </form>
  );
};

export default AddFriendForm;
