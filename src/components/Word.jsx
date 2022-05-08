import React, { useRef, useEffect } from "react";

function Word({ children }) {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="bg-violet-400 p-4 text-lg min-w-[300px]">
      <div>
        <span id="stem" className="text-yellow-200 font-bold capitalize">
          {children}-
        </span>
        <span>
          <input
            ref={input}
            id="input"
            className="outline-none p-1 bg-violet-400 text-yellow-200 border-y-2 border-sky-200 max-w-[200px]"
          />
        </span>
      </div>
    </div>
  );
}

export default Word;
