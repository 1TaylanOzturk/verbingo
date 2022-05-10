import React from "react";
import { motion } from "framer-motion";
import {
  coordination,
  conjugations,
  random,
  modes,
  persons,
  stems,
} from "../utils";

function Button(props) {
  
  const classList = [
    props.className,
    `bg-green-500`,
    `hover:bg-green-400`,
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "border-b-4",
    `border-green-700`,
    `hover:border-green-500`,
    "rounded",
  ];

  const skip = () => {
    props.modeHandler(random(modes));
    props.personIDHandler(random(persons));
    props.stemHandler(random(stems));
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  };

  const clickHandler = () => {
    if (props.check) {
      const input = document.getElementById("input").value.toLowerCase();
      const stem = document
        .getElementById("stem")
        .innerText.slice(0, -1)
        .toLowerCase();
      const person = props.person;
      const mode = props.mode;
      const tense = coordination[mode];
      const expected = conjugations[tense][stem][person];
      const gotten = stem + input;

      if (expected === gotten) {
        props.fireworkHandler(true);
        setTimeout(() => {
          props.fireworkHandler(false);
        }, 2500);
      } else {
        props.modalPropsHandler({
          title: "Yanlış Çekimleme",
          expected: expected,
          gotten: gotten,
          visibilityHandler: props.visibilityHandler,
        });
        props.visibilityHandler(true);
      }
      skip();
    }
    if (props.skip) {
      skip();
    }
  };

  return (
    <motion.button
      className={classList.join(" ")}
      id={props.id}
      onClick={clickHandler}
      whileTap={{ scale: 1.1 }}
    >
      {props.children}
    </motion.button>
  );
}

export default Button;
