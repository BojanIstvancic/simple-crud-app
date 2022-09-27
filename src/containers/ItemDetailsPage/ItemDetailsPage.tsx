import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import defaultConfig from "../../config";

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface RouteParams {
  id: string;
}

interface ItemDetailsPageProps extends RouteComponentProps<RouteParams> {}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ match }) => {
  const [item, setItem] = useState<Item>({
    id: 1,
    title: "Default Title",
    body: "Default Description",
    userId: 1,
  });

  const id = match.params.id;

  useEffect(() => {
    axios.get(`${defaultConfig.apiUrl}/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  console.log(item, "item");
  return (
    <>
      <p>ItemDetailsPage</p>
    </>
  );
};

export default ItemDetailsPage;
