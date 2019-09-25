import axios from "axios";
const baseUrl = "http://localhost:3002/api/login";

const login = async credentials => {
  const response = await axios.post(baseUrl, {
    email: credentials.email,
    password: credentials.password
  });

  const response2 = localStorage.setItem("usertoken", response.data);

  return response2.data;
};

export default { login };
