import React, { useState, useEffect } from "react";
import Flex from "./components/Flex";
import Instruction from "./components/Instruction";
import Word from "./components/Word";
import Panel from "./components/Panel";
import Button from "./components/Button";
import { Fireworks } from "fireworks-js/dist/react";
import Modal from "./components/Modal";
import {
  modes,
  stems,
  persons,
  coordination,
  random,
  imperativePersons,
} from "./utils";

function App() {
  const [mode, setMode] = useState(random(modes));
  const [personID, setPersonID] = useState(mode === "Emir Kipi" ? random(imperativePersons) : random(persons));
  const [stem, setStem] = useState(random(stems));
  const [isFireworksEnabled, setIsFireworksEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState({ visibilityHandler: setIsModalVisible });
  const person = coordination[personID];
  const panelProps = {
    mode: mode,
    person: personID,
    modeHandler: setMode,
    personIDHandler: setPersonID,
    stemHandler: setStem,
    fireworkHandler: setIsFireworksEnabled,
    modalPropsHandler: setModalProps,
    visibilityHandler: setIsModalVisible,
  };

  useEffect(() => {
    const input = document.getElementById("input");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".btn-check").click();
      }
    });
  }, []);

  return (
    <>
      <div className="mt-[10px] lg:mt-[100px]">
        <Flex>
          <Fireworks
            enabled={isFireworksEnabled}
            options={{ speed: 2 }}
          ></Fireworks>
        </Flex>
        <Flex className="flex-col">
          <Instruction>{mode}</Instruction>
          <Instruction>{person}</Instruction>
        </Flex>
        <Flex>
          <Word>{stem}</Word>
        </Flex>
        <hr className="w-[100%] lg:w-[40%] mr-auto ml-auto" />
        <Panel {...panelProps}>
          <Button className="mr-auto" skip colorVariant="yellow">
            Skip
          </Button>
          <Button className="btn-check" check colorVariant="green">
            Check
          </Button>
        </Panel>
      </div>
      <Modal visible={isModalVisible} {...modalProps} />
    </>
  );
}

export default App;
