import React from "react";
import { motion } from "framer-motion";
import {
  coordination,
  conjugations,
  random,
  modes,
  persons,
  stems,
  imperativePersons,
} from "../utils";

function Button(props) {
  const colorVariant = props.colorVariant;
  const colors = [];
  const classes = [
    props.className,
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "border-b-4",
    "rounded",
  ];

  if (colorVariant === "green") {
    colors.push(
      "bg-green-500",
      "hover:bg-green-400",
      "border-green-700",
      "hover:border-green-500"
    );
  }
  if (colorVariant === "yellow") {
    colors.push(
      "bg-yellow-500",
      "hover:bg-yellow-400",
      "border-yellow-700",
      "hover:border-yellow-500"
    );
  }

  const skip = () => {
    const mode = random(modes);
    props.modeHandler(mode);
    props.personIDHandler(mode === "Emir Kipi" ? random(imperativePersons) : random(persons));
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
      className={classes.concat(colors).join(" ")}
      id={props.id}
      onClick={clickHandler}
      whileTap={{ scale: 1.1 }}
    >
      {props.children}
    </motion.button>
  );
}

export default Button;
