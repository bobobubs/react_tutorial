/** @format */

import { useState, useRef, useEffect } from "react";
import "./index.css";
function App() {
  const ref = useRef<HTMLInputElement>(null);

  //function should really be called afterRender
  useEffect(() => {
    //changes the focus of the DOM element to be the ref if ref.current is defined
    //has a "side effect" ie no longer a pure component.
    //can make it a pure component by using a ref hook.
    if (ref.current) ref.current.focus();
  });

  //effect that changes the title of the document.
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
