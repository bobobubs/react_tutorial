/** @format */

import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [isMore, setIsMore] = useState(true);

  const handleClick = () => {};

  return (
    <>
      <div>
        <ExpandableText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          expedita assumenda nisi maxime. Voluptate autem sed eligendi veniam
          nulla deleniti, recusandae excepturi similique omnis. Dicta aliquid
          enim nihil? Accusamus ut ipsum quibusdam quasi consectetur dolorem
          vitae tempore, ratione minus tenetur ex nostrum numquam rem ducimus
          recusandae, suscipit quae dolor unde impedit magni, praesentium
          perferendis. Ex quaerat quos quam. Corrupti dolore aliquam repudiandae
          asperiores quo voluptatum vel necessitatibus alias ratione nesciunt
          doloremque magnam iusto, saepe optio nobis vitae eum maxime recusandae
          impedit ut illum modi ab laudantium. Saepe ipsa tempore nemo
          blanditiis nisi eum, illum nulla animi provident, officiis ut eius?
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
