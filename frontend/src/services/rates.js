import axios from "axios";
const baseUrl = "http://localhost:3002/api/rates";

const rates = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { rates };
