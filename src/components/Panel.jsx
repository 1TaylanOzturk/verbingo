import React from "react";
import Flex from "./Flex";

function Panel(props) {
  let childProps = {
    mode: props.mode,
    person: props.person,
    modeHandler: props.modeHandler,
    personIDHandler: props.personIDHandler,
    stemHandler: props.stemHandler,
    fireworkHandler: props.fireworkHandler,
    modalPropsHandler: props.modalPropsHandler,
    visibilityHandler: props.visibilityHandler,
  };
  return (
    <Flex className="max-w-[250px] mr-auto ml-auto mt-5">
      {React.Children.map(props.children, function (child) {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, childProps);
        }
        return child;
      })}
    </Flex>
  );
}

export default Panel;
