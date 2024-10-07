import axios from "axios";

export const fetchMenu = async () => {
  const url = `https://my-json-server.typicode.com/benirvingplt/products/menu`;

  try {
    const response = await axios.get(url);
    console.log(response, "rrrr");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
