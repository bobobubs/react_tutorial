/** @format */
import { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <BsFillSuitHeartFill color="#ff6b81" size={100} onClick={toggle} />;
  } else {
    return <AiOutlineHeart size={100} onClick={toggle} />;
  }
};

export default Like;
