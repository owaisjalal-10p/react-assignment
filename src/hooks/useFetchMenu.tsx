import { useState, useEffect } from "react";
import { fetchMenu } from "../service/menu.service";

const useFetchMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState<any>(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const data = await fetchMenu();
        setMenu(data[0]);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, []);

  return { menu, loading };
};

export default useFetchMenu;
