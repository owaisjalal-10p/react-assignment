import axios from "axios";

export const fetchProduct = async () => {
  const url = `https://my-json-server.typicode.com/benirvingplt/products/products`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
