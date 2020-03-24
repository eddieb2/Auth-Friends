import axios from "axios";

// REVIEW I am still a bit confused about what is going on here... 3/24/20. Write an explaination of what is happening when it is fully understood.
export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token
    }
  });
};
