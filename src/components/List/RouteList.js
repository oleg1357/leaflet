import { useState } from "react";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { getRoute } from "src/sagas/actions";
import items from "./items";

const Routelist = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("");

  const onClick = async (e) => {
    dispatch(getRoute(e.key));
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={current} items={items} />;
};
export default Routelist;
