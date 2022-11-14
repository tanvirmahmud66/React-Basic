import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);
  const divContainer = useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    console.log(divContainer.current);
    inputRef.current.focus();
  });

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" ref={inputRef} />
        <button type="submit"> add </button>
      </form>
      <div ref={divContainer}>This is the hello</div>
    </div>
  );
}
