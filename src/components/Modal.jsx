import React from "react";
import { motion } from "framer-motion";

export default function Modal(props) {
  const animationProps = {
    animate: {
      y: [-400, 0, -20, 5, 0],
      type: "spring",
    },
  };

  if (props.visible) {
    return (
      <>
        <motion.div
          {...animationProps}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl font-semibold text-black">
                  {props.title}
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  <span className="block capitalize">
                    Beklenen: {props.expected}
                  </span>
                  <span className="block capitalize">
                    Alınan: {props.gotten}
                  </span>
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.visibilityHandler(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }
  return null;
}
