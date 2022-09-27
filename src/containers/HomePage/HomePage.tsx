import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import defaultConfig from "../../config";

const HomePage: React.FC<RouteComponentProps> = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(defaultConfig.apiUrl);
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
