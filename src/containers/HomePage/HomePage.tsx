import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage: React.FC<RouteComponentProps> = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data, "daturina");
  return (
    <>
      <p>HomePage</p>
    </>
  );
};

export default HomePage;
