import axios from "axios";
const baseUrl = "http://localhost:3002/api/login";

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials);
  console.log("response", response);
  // const response2 = localStorage.setItem("usertoken", response.data);

  return response.data;
};

export default { login };
