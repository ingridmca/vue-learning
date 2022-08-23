import axios from "axios";

const URL = "http://localhost:4000";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${URL}/products`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
