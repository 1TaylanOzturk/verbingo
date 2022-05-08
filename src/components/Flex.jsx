import React from "react";

function Flex(props) {
  return (
    <div
      className={`${props.className} flex justify-center items-center mb-10`}
    >
      {props.children}
    </div>
  );
}

export default Flex;
