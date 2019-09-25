import axios from "axios";
const baseUrl = "http://localhost:3002/api/register";

const register = async credentials => {
  const response = await axios.post(baseUrl, {
    firstName: credentials.firstName,
    middleName: credentials.middleName,
    lastName: credentials.lastName,
    dob: credentials.dob,
    email: credentials.email,
    password: credentials.password
  });
  return response.data;
};

export default { register };
